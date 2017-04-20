from django.shortcuts import render, HttpResponse, redirect
from .models import Users
# Create your views here.
def index(request):

    return render(request, 'userValidation/index.html')

def process(request):
    infoEntered = Users.objects.login(request.POST['username'])
    if infoEntered == True:
        Users.objects.create(username =request.POST['username'])
        return redirect('/success')
    else:
        request.session['error'] = infoEntered['error']
        return redirect('/')

def success(request):
    context = {
        'username' : Users.objects.all()
    }
    request.session.clear()
    return render(request, 'userValidation/success.html', context)
