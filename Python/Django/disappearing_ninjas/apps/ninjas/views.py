from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'ninjas/index.html')

def ninjas(request):
    context ={
        'team': True
    }
    return render(request, 'ninjas/show.html', context)


def show(request, color):
    context ={
        'team': False,
        'color': color
    }
    return render(request, 'ninjas/show.html', context)
