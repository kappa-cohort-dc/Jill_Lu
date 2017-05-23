# -------------### Create ### ----------------------#
def create
  @dojo= Dojo.create(branch: params[:branch], address: params[:address], city: params[:city], state: params[:state])
  if @dojo.valid?
    redirect_to '/'
      ## OR redirect_to root_url, notice: "enter your message here"##
  else
    flash[:errors]= @dojo.errors.full_messages
    redirect_to :back
  end
end
#--------------RESTFUL routes ---------------------#
get ':dojo_id/students' => 'students#index'
get ':dojo_id/students/new' => 'students#new'
post ':dojo_id/students' => 'students#create'
get ':dojo_id/students/:id' => 'students#show'
get ':dojo_id/students/:id/edit' => 'students#edit'
patch ':dojo_id/students/:id' => 'students#update'
delete ':dojo_id/students/:id' => 'students#delete'
#----------------validations------------------------#
validates :username, presence: true, uniqueness: { case_sensitive: false }, length: { minimum:6 }
EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
validates :name, :email, :password, :password_confirmation, presence: true
validates :email, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX}

#----------log user out -----------------------------#
