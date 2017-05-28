class UsersController < ApplicationController
  before_action :require_login, only:[:show]
  def create
    @user= User.create(first_name: params[:first_name], last_name: params[:last_name], email: params[:email],password: params[:password])
    if @user.valid?
      session[:user_id]= @user.id
      redirect_to "/shoes"
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to :back
    end
  end
  def show
    # @user = User.find(session[:user_id])
    # @products = Product.all
    # @purchased= Buyer.where('user_id=?', current_user.id)
  end


end
