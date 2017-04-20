from django.shortcuts import render, HttpResponse
import random

VALUES = ['pandas', 'kittens', 'puppies', 'tigers', 'lions', 'horses', 'gorillas', 'bears', 'monkeys']
# Create your views here.
def index(request):
    return render(request, 'surpriseMe/index.html')

def results(request):
    number = request.POST['number']
    random.shuffle(VALUES)

    output = []

    for animal in range(0, int(number)):
        output.append(VALUES[animal])
    context = {
        'values' : output,
        'number' : number
    }
    return render(request, 'land_app/results.html', context)
