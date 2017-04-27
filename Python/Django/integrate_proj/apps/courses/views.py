from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse
from .models import Courses
# Create your views here.
def index(request):
    context = {
        'courses' : Courses.objects.all()
    }
    return render(request, 'courses/index.html', context)

def create(request):
    Courses.objects.create(course_name =request.POST['name'], description =request.POST['description'])

    return redirect(reverse ('courses:index'))

def confirmation(request, id):
    context = {
        'courses': Courses.objects.get(id=id)
    }
    return render(request, 'courses/remove.html', context)

def remove(request, id):
    Courses.objects.filter(id=id).delete()
    return redirect(reverse ('courses:index'))
