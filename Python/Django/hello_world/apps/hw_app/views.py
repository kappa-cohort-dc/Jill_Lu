from django.shortcuts import render, HttpResponse

def index(request):
    # response = 'Hello World'
    return render(request, 'hw_app/index.html')
# Create your views here.
