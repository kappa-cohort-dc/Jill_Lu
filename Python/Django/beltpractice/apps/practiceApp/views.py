from django.shortcuts import render, redirect
from ..log_reg.models import Users
from ..practiceApp.models import Books, Reviews
from django.contrib import messages
from django.core.urlresolvers import reverse
from django.db.models import Count, Q
# Create your views here.

def booksHome(request):
    context ={
        "book": Books.objects.all(),
        "review": Reviews.objects.all(),
        "reviewer": Users.objects.all(),
    }
    return render(request, 'practiceApp/index.html', context)

def addBook(request):
    return render(request, 'practiceApp/addbooks.html')
def addBookProcess(request):
    #get user id to link book/reviews
    user = Users.objects.get( email = request.session['log_user'])
    book = Books.objects.create(title= request.POST['title'], author= request.POST['author'])

    Reviews.objects.create(content = request.POST['content'], rating = int(request.POST['rating']), user_id = user.id, book_id = book.id)
    return redirect(reverse ('practiceApp:showReview', kwargs={'id': book.id}))
        #kwargs to link review specific book aka book.id
def showReview(request, id):
    context ={
        "book": Books.objects.get(id= id),
        "review": Reviews.objects.filter(book_id = id),
        "reviewer": Users.objects.all(),
    }
    return render(request, 'practiceApp/showReview.html', context)

def reviewer(request, id):
    context ={
        "reviewer": Users.objects.get(id=id),
        "book": Books.objects.all(),
        "blurb":Reviews.objects.filter(user_id= id).count(),
        "all_blurb": Reviews.objects.filter(user_id = id),
    }
    return render(request, 'practiceApp/showUser.html', context)
