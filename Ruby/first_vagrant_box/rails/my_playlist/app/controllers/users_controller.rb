class UsersController < ApplicationController
  before_action :require_login, only:[:show, :favorites, :playlist]
   def create
     @user= User.create(first_name: params[:first_name], last_name: params[:last_name], email: params[:email],password: params[:password])
     if @user.valid?
       session[:user_id]= @user.id
       redirect_to "/songs"
     else
       flash[:errors] = @user.errors.full_messages
       redirect_to :back
     end
   end
   def show
     @songs = Song.order('created_at DESC')
   end

   def favorites
     @user = User.find(session[:user_id])
     @song = Song.find(params[:id])
     @song.increment!(:count)
     @playlist = Favorite.find_by(user:@user, song:@song)
      if @playlist
        @playlist.increment!(:count)
      else
        Favorite.create(user:@user, song:@song, count: 1 )
        end
        redirect_to :back
   end

   def playlist
     @user = User.find(params[:id])
     @playlist = Favorite.where(user_id: @user)

   end
end
