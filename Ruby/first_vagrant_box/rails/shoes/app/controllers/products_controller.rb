class ProductsController < ApplicationController
  before_action :require_login
  def create
    @user= User.find(session[:user_id])
    product= Product.create(name: params[:name], price: params[:price], user:@user)
    redirect_to :back
  end
  def show
    @products= Product.all
  end

  def buyer
    @user = User.find(session[:user_id])
    @product= Product.find(params[:id])
    Buyer.create(user: @user, product: @product)
    redirect_to "/users/show/#{@user.id}>"
  end

  def delete
    Product.find(params[:id]).delete
    redirect_to :back
  end
end
