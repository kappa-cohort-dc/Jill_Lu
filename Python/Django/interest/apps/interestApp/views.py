from django.shortcuts import render, redirect
from .models import Users, Interests, UserInterest
from django.core.urlresolvers import reverse


# Create your views here.
def index(request):
    return render(request, 'interestApp/index.html')

def addItem(request):
    if request.method == 'POST':
        if Users.objects.filter(username= request.POST['name']):
            user= Users.objects.get(username=request.POST['name'])
        else:
            user = Users.objects.create(username=request.POST['name'])
        if Interests.objects.filter(interest = request.POST['interest']):
            interest = Interests.objects.get(interest=request.POST['interest'])
        else:
            interest= Interests.objects.create(interest=request.POST['interest'])

    UserInterest.objects.create(user= user, interest= interest)
    return redirect(reverse ("interestApp:dashboard"))

def dashboard(request):
    context ={
        'user': Users.objects.all(),
    }
    return render(request, 'interestApp/dashboard.html', context)

def interest(request, id):
    context ={
        'user': Users.objects.get(id=id),
        'user_interest': UserInterest.objects.filter(user_id= id)
    }
    return render(request, 'interestApp/interest.html', context)
