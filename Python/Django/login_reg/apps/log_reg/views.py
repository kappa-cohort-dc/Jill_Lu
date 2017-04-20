from django.shortcuts import render, redirect
from .models import Users
# Create your views here.
def index(request):
    return render(request, 'log_reg/index.html')

def register(request):
    result = Users.objects.register(request.POST)
    if result == True:
        Users.objects.create(first_name = request.POST['fname'], last_name = request.POST['lname'], email = request.POST['email'], password = request.POST['password'])
        return redirect ('/success')
    else:
        request.session['error'] = result['error']
        return direct ('/')

def login(request):
    result = Users.objects.login(request.POST)
    if result == True:
        request.session['email'] == request.POST['user_email']
        request.session['password'] == request.POST['user_password']
        return redirect('/success')
    else:
        request.session['error'] = result['error']
        return redirect ('/')

def success(request):
    context = {
        'users' : Users.object.all(),
    }
    return render(request, 'log_reg/success.html', context)
