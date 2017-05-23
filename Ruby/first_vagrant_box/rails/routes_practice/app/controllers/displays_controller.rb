class DisplaysController < ApplicationController
  def index
    render 'displays/index'
  end

  def hello
    render 'displays/hello'
  end

  def say
    unless params[:name]
      render text:"Saying Hello"
    else
      if params[:name] == 'michael'
      redirect_to '/say/hello/joe'
      else
      render text: "Saying hello #{params[:name]}"
      end
    end
  end

  def times
    session[:count] ||= 0
    render text: "You have visited this url #{session[:count] += 1} time(s)"
  end

  def restart
    reset_session
    render 'displays/restart'
  end
end
