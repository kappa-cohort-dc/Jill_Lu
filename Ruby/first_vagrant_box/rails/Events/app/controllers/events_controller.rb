class EventsController < ApplicationController
  before_action :require_login
  def show
    @event = Event.find(params[:id])
  end

  def create
    @user= User.find(session[:user_id])
    @event= Event.create(name: params[:name], date: params[:date], location: params[:location], state: params[:state], user:@user)
    if @event.valid?
      redirect_to "/users/show/#{@user.id}"
    else
      flash[:errors]=@user.errors.full_messages
      redirect_to :back
    end
  end
  def edit
    @event = Event.find(params[:id])
  end
  def update
    @user = User.find(session[:user_id])
    @event = Event.find(params[:id])
    @event.update(name: params[:name], date: params[:date], location: params[:location], state: params[:state], user: @user)
    if @event.valid?
      redirect_to "/users/show/#{@user.id}"
    end
  end
  def delete
    Event.find(params[:id]).destroy
    redirect_to :back
  end

  def join
    @event=Event.find(params[:id])
    @attendees= Attendee.create(user:current_user, event:@event)
    redirect_to :back
  end
  def cancel
    @attendee= Attendee.find(params[:id])
    @attendee.destroy if current_user===@attendee.user
    redirect_to :back
  end
end
