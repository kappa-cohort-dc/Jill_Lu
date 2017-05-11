from django.shortcuts import render, redirect
from ..log_reg.models import Users
from ..wish_list.models import Products
from django.contrib import messages
from django.core.urlresolvers import reverse
from django.db.models import Count, Q
# Create your views here.
def dashboard(request):
    return render(request, 'wish_list/dashboard.html')

def createItem(request):
    return render(request, 'wish_list/addItem.html')

def process(request):
    item = Products.objects.validate(request.POST, request.session['log_user'])
    user= Users.objects.get(id= request.session['log_user'])
    if result[0] is True:
        for errs in result[1]:
            messages.error(request, errs)
    else:
        return redirect(reverse, ('wish_list:dashboard'))

def removeItem(request):
    pass

def deleteItem(request):
    pass

def showItem(request):
    return render(request, 'wish_list/product.html')
