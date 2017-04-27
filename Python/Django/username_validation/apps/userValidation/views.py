from django.shortcuts import render, redirect
from .models import Users
# Create your views here.
def index(request):

    return render(request, 'userValidation/index.html')

def process(request):
    infoEntered = Users.objects.login(request.POST['username'])

    if infoEntered == True:
        Users.objects.create(username = request.POST['username'])
        request.session['username']= request.POST['username']
        return redirect('/success')
    elif 'error'in infoEntered:
        request.session['error'] = infoEntered['error']
        return redirect('/')

def success(request):
    context = {'user' : Users.objects.all()}
    last = len(context['user'])-1
    context['current'] = context['user'][last]
    request.session.clear()
    return render(request, 'userValidation/success.html', context)
