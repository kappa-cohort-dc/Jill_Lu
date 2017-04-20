from django.shortcuts import render, redirect, HttpResponse
from .models import Courses
# Create your views here.
def index(request):
    context = {
        'courses' : Courses.objects.all()
    }
    return render(request, 'course_app/index.html', context)

def create(request):
    Courses.objects.create(course_name =request.POST['name'], description =request.POST['description'])

    return redirect('/')

def confirmation(request, id):
    context = {
        'courses': Courses.objects.get(id=id)
    }
    return render(request, 'course_app/remove.html', context)

def remove(request, id):
    Courses.objects.filter(id=id).delete()
    return redirect('/')
