class SongsController < ApplicationController
  def show
    @song = Song.find(params[:id])
    @favorites =Favorite.where(song: @song).distinct(:user_id)
  end
  def create
    @user= User.find(session[:user_id])
    song= Song.create(artist: params[:artist], title: params[:title], count: 0, user:@user)
    if song.valid?
      redirect_to :back
    else
      flash[:errors] = song.errors.full_messages
      redirect_to :back
    end
  end
end
