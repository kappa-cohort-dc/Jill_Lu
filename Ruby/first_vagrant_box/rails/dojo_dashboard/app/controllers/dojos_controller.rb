class DojosController < ApplicationController
  def index
    @branch = Dojo.all
  end
  def new
    render 'dojos/new'
  end
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
  def delete
    Dojo.find(params[:id]).delete
    redirect_to '/'
  end
  def edit
    @dojo= Dojo.find(params[:id])
    render 'dojos/edit'
  end
  def show
    @dojo= Dojo.find(params[:id])
    @students = @dojo.students
    render 'dojos/show'
  end
  def update
    @dojo= Dojo.find(params[:id])
    @dojo.update(dojo_params)
    redirect_to '/'
  end

  private
  def dojo_params
    params.require(:dojo).permit(:branch, :address, :city, :state)
  end

end
