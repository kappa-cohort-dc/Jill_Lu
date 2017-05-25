class UsersController < ApplicationController
  before_action :require_login, only:[:index, :show, :edit, :update]
  def index
  end
  def create
    @user= User.create(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], location: params[:location], state: params[:state], password: params[:password], password_confirmation: params[:password_confirmation])
    if @user.valid?
      session[:user_id]= @user.id
      redirect_to "/users/show/#{@user.id}"
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to :back
    end
  end
  def show
    @in_state = Event.where('state=?', current_user.state)
    @out_of_state=Event.where.not('state=?', current_user.state)
    @user= User.find(params[:id])
    render 'users/index'
  end
  def edit
    render 'users/edit'
  end
  def update
    @user= User.find(params[:id])
    if @user.update(user_params)
      redirect_to "/users/show/#{@user.id}"
    else
      flash[:errors]= @user.errors.full_messages
      redirect_to :back
    end
  end
private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :location, :state)
  end
end
