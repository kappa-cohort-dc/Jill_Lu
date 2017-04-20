from django.shortcuts import render, redirect
from .models import Books
# Create your views here.
def index(request):
    book_list = Books.objects.all()
    return render(request, 'booksApp/index.html', {'data': book_list})

def process(request):
    Books.objects.create(title=request.POST['title'], author=request.POST['author'], category=request.POST['category'])
    return redirect('/')
