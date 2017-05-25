class DiscussionsController < ApplicationController
  before_action :require_login
  def create
    @event=Event.find(params[:id])
    Discussion.create(content: params[:content], event:@event, user:current_user )
    redirect_to :back
  end

  def show
    @chats = Discussion.all
    @event= Event.find(params[:id])
  end
end
