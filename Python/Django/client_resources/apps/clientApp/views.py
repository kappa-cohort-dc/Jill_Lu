from django.shortcuts import render, reverse, redirect
from .models import Clients, Projects
from django.core.urlresolvers import reverse
# Create your views here.
def index(request):
    context ={
        'client_info': Clients.objects.all()
    }
    return render(request, 'clientApp/index.html', context)

def add_client(request):
    return render(request, 'clientApp/addclient.html')

def process(request):
    if request.method == 'POST':
        if Clients.objects.filter(business_name = request.POST['business_name']):
            client = Clients.objects.get(business_name = request.POST['business_name'])
        else:
            client = Clients.objects.create(business_name= request.POST['business_name'], email= request.POST['email'], phone=request.POST['phone'], notes= request.POST['notes'])
    return redirect(reverse('clientApp:show_client', kwargs={'id': client.id}))

def show_client(request, id):
    context={
        'client_info':Clients.objects.all()
    }
    return render(request, 'clientApp/user.html')
def add_project(request):
    #pass through client ID
    pass
def show_projects(request, id):
    pass
