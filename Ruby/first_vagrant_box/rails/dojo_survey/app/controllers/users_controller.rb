class UsersController < ApplicationController
  def main
    session[:views] ||=0
  end
  def create
    session[:views] +=1
    session[:result] = params[:user]
    flash[:success] = "Thanks for submitting this form! You have submitted this form #{ session[:views] } time(s) now."
    redirect_to '/result'
  end
  def result
    @result = session[:result]
    render 'users/results'
  end
end
