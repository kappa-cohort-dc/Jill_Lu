class UsersController < ApplicationController
  def index
    render 'users/index'
  end

  def create
    @user= User.find_by(username: params[:username])
    if @user
      session[:user]=@user.id
      redirect_to '/messages'
    else
      @user = User.create(username: params[:username])
      if @user.valid?
        session[:user]=@user.id
        redirect_to '/messages'
        else
        flash[:errors]= @user.errors.full_messages
        redirect_to :back
      end
    end
  end
  def logout
    reset_session
    redirect_to '/'
  end
end
