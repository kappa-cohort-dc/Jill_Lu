from django.shortcuts import render, redirect
from ..log_reg.models import Users
from ..wish_list.models import Products
from django.contrib import messages
from django.core.urlresolvers import reverse
from django.db.models import Count, Q
# Create your views here.
def index(request):
    context={
        'user': Users.objects.get(id= request.session['log_user']),
        'my_items': Products.objects.filter(wish=request.session['log_user']),
        'others': Products.objects.all().exclude(wish= request.session['log_user']),
    }
    return render(request, 'wish_list/dashboard.html', context)

def createItem(request):
    return render(request, 'wish_list/addItem.html')

def process(request):
    result = Products.objects.validate(request.POST, request.session['log_user'])
    user= Users.objects.get(id= request.session['log_user'])

    if result[0] is True:
        for err in result[1]:
            messages.error(request, err)
        return render(request, 'wish_list/addItem.html')
    else:
        return redirect(reverse ('wish_list:index'))

def addItem(request, id):
    user= Users.objects.get(id=request.session['log_user'])
    myWish=Products.objects.get(id=id)
    myWish.wish.add(user)
    return redirect(reverse ('wish_list:index'))

def removeItem(request, id):
    user=Users.objects.get(id= request.session['log_user'])
    remove_item= Products.objects.get(id=id)
    remove_item.wish.remove(user)
    return redirect(reverse ('wish_list:index'))

def deleteItem(request, id):
    user=Users.objects.get(id= request.session['log_user'])
    delete_item= Products.objects.filter(id=id).delete()
    return redirect(reverse ('wish_list:index'))

def showItem(request, id):
    context ={
        'item': Products.objects.get(id=id),
        'people': Products.objects.filter(Q(id=id)|Q(user_id=id)),
    }
    return render(request, 'wish_list/product.html', context)
