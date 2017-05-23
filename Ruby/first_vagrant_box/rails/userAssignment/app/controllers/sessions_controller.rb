class SessionsController < ApplicationController
  def new
    render 'sessions/new'
  end
  def create
    @user= User.create(name: params[:name], email: params[:email], password: params[:password])
    if @user.valid?
      session[:user_id]= @user.id
      redirect_to '/'
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to :back
  end
  def destroy
    session[:user_id] = nil
    redirect_to '/'
  end
end
