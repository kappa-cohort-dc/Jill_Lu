from django.shortcuts import render, redirect
from .models import Users, Books, Reviews
from django.contrib import messages
from django.core.urlresolvers import reverse
from django.db.models import Count, Q
# Create your views here.
def index(request):
    return render(request, 'beltReview/index.html')
def register(request):
    result = Users.objects.register(request.POST)
    if result[0] is False:
        print '#' * 50
        request.session['log_user'] = request.POST['email']
        return redirect(reverse ('beltReview:success'))
    else:
        for err in result[1]:
            messages.error(request, err)
        return redirect ('/')
def login(request):
    result = Users.objects.login(request.POST)
    if result is False:
        user = Users.objects.get(email = request.POST['email'])
        request.session['log_user'] = user
        return redirect('/success')
    else:
        for errors in result:
            messages.error(request, errors)
            return redirect ('/')
def success(request):
    return redirect ('/books')
def books(request):
    return render(request, 'beltReview/books.html')
def addBooks(request):
    return render(request, 'beltReview/addbooks.html')
def create(request):
    result = Books.objects.create(title= request.POST['title'], author= request.POST['author'])
    # print result.id
    # return redirect ('/')
    reviewer= Users.objects.get(email =request.session['log_user'])
    result2 = Reviews.objects.create(content = request.POST['content'], user_id = reviewer.id, rating = int(request.POST['rating']), book_id = result.id)
    return redirect(reverse ('beltReview:reviewBooks', kwargs={'id': result.id}))
    #kwargs, passing through id to html
def reviewBooks(request, id):
    context = {
        "book": Books.objects.get(id=id),
        "review": Reviews.objects.filter(book_id = id),
        "user": Users.objects.all()
    }
    return render(request, 'beltReview/showBooks.html', context)

def createReview(request, id):
    reviewer= Users.objects.get(email =request.session['log_user'])
    result2 = Reviews.objects.create(content = request.POST['content'], user_id = reviewer.id, rating = int(request.POST['rating']), book_id = id)

    return redirect(reverse ('beltReview:reviewBooks', kwargs={'id': id}))

def viewUsers(request, id):
    context ={
        "reviewer" : Users.objects.get(id=id),
        "reviews" : Reviews.objects.filter(user_id = id).count(),
        "allReviews": Reviews.objects.filter(user_id= id),
        "books" : Books.objects.all(),
    }

    return render(request, 'beltReview/viewUsers.html', context)

def logout(request):
    request.session.clear()
    return redirect('/')
