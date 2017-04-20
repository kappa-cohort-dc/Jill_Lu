from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'land_app/index.html')
def show(request, num):
    context = {
        'num': int(num)
    }
    return render(request, 'land_app/images.html', context)
