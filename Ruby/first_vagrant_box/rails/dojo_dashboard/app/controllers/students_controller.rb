class StudentsController < ApplicationController
  def index

  end
  def create
    dojo= Dojo.find(params[:dojo_id])
    Student.create(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], dojo: dojo)
    redirect_to '/'
  end
  def new
    @dojo = Dojo.find(params[:dojo_id])
    @dojos= Dojo.all
    render 'students/new'
  end

  def show
    @dojo= Dojo.find(params[:dojo_id])
    @student= Student.find(params[:id])
  end

  def edit
    @ninja= Student.find(params[:id])
    @dojo = Dojo.find(params[:id])
    @dojos= Dojo.all
    render 'students/edit'
  end
  def delete
    Student.find(params[:id]).delete
    redirect_to :back
  end
  def update
    @ninja= Student.find(params[:id])
    @dojo= Dojo.find(params[:student][:dojo])
    @ninja.update(student_params(@dojo))
    redirect_to '/show/'+ params[:dojo_id]
  end
  private
  def student_params(dojo)
    params.require(:student).permit(:first_name, :last_name, :email, dojo)
  end
end
