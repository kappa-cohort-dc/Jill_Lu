from django.shortcuts import render, redirect
from .models import Users
from django.contrib import messages
from django.core.urlresolvers import reverse

# Create your views here.
def index(request):
    return render(request, 'log_reg/index.html')

def register(request):
    result = Users.objects.register(request.POST)
    if result[0] is False:
        print '#' * 50
        request.session['log_user'] = request.POST['first_name']
        return redirect(reverse ('log_reg:success'))

    else:
        for err in result[1]:
            messages.error(request, err)
        return redirect ('/')


def login(request):
    result = Users.objects.login(request.POST)
    if result is False:
        user = Users.objects.get(email = request.POST['email'])
        request.session['log_user'] = user.first_name
        return redirect('/success')
    else:
        for errors in result:
            messages.error(request, errors)
            return redirect ('/')

def success(request):
    context = {
        'users' : Users.objects.all(),
    }
    return render(request, 'log_reg/success.html', context)
def logout(request):
    request.session.clear()
    return redirect('/')
