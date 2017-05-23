class MessagesController < ApplicationController
  def index
    @user=User.find(session[:user])
    @messages = Message.all
    @comments = Comment.all
    render 'messages/index'
  end

  def create
    @user =User.find(session[:user])
    @message= Message.create(content: params[:content], user: @user)
    if @message.valid?
    redirect_to :back
      else
      flash[:err] = @message.errors.full_messages
      redirect_to :back
    end
  end

  def comments
    @user = User.find(session[:user])
    @message = Message.find(params[:message_id])
    @comment = Comment.create(content: params[:content], message: @message, user: @user)
    if @comment.valid?
      redirect_to :back
    else
      flash[:errors] = @comment.errors.full_messages
      redirect_to :back
    end
  end
end
