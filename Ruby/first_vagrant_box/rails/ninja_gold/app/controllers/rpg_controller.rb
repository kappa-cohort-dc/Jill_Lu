class RpgController < ApplicationController
  def index
    session[:gold] ||=0
    session[:activity] ||=[]
  end
  # def farm
  #   @time = Time.now
  #   current_gold= rand(10..20)
  #   session[:gold] += current_gold
  #   session[:activity] << "Earned #{current_gold} from farm at #{@time}"
  #   redirect_to '/'
  # end
  # def cave
  #   @time = Time.now
  #   current_gold= rand(5..10)
  #   session[:gold] += current_gold
  #   session[:activity] << "Earned #{current_gold} from cave at #{@time}"
  #   redirect_to '/'
  # end
  # def casino
  #   @time = Time.now
  #   current_gold= rand(-50..50)
  #   session[:gold] += current_gold
  #   if current_gold > 0
  #   session[:activity] << "Earned #{current_gold} from casino at #{@time}"
  #   else
  #   session[:activity] << "Lost #{current_gold} from casino at #{@time}"
  # end

  #   redirect_to '/'
  # end
  # def house
  #   @time = Time.now
  #   current_gold= rand(2..5)
  #   session[:gold] += current_gold
  #   session[:activity] << "Earned #{current_gold} from casino at #{@time}"
  #   redirect_to '/'
  # end
  def clear
    session[:gold]= 0
    session[:activity]= nil
    redirect_to '/'
  end
  def create
    @time = Time.now
    if params[:place]== 'farm'
      gold= rand(10..20)
    elsif params[:place] == 'cave'
      gold= rand(5..10)
    elsif params[:place]== 'house'
      gold= rand(2..5)
    elsif params[:place]== 'casino'
      gold= rand(-50..50)
    end
    if gold>0
      session[:activity]<< "Earned #{gold} from #{params[:place]} at #{@time}"
    else
      session[:activity]<< "Lost #{gold} from #{params[:place]} at #{@time}"
    end

    session[:gold]+=gold
    redirect_to '/'
  end
end
