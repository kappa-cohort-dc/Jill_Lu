from django.shortcuts import render

def index(request):
    return render(request, 'real_port/index.html')
def show(request):
    return render(request, 'real_port/testimonials.html')
def projects(request):
    return render(request, 'real_port/projects.html')
def about(request):
    return render(request, 'real_port/about.html')
