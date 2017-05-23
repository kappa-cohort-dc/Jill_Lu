class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def new
    render 'users/new_user'
  end
  def show
    render json: User.find(params[:id])
  end

  def edit
    @user= User.find(params[:id])
    render 'users/edit_user'
  end
  # def update
  #   User.find(params[:id]).update(name:params[:name])
  #   redirect_to '/users'
  # end
  # def destroy
  #   User.find(params[:id]).destroy
  #   redirect_to '/users'
  # end
  def create
    User.create(name: params[:name])
    redirect_to '/users'
  end
  def total
    @user_count= User.count
    render 'users/count'
  end

end
