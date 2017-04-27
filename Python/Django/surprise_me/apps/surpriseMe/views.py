from django.shortcuts import render, HttpResponse
import random

VALUES = ['pandas', 'kittens', 'puppies', 'tigers', 'lions', 'horses', 'gorillas', 'bears', 'monkeys', 'elephants']
# Create your views here.
def index(request):
    return render(request, 'surpriseMe/index.html')

def results(request):
    animal = request.POST['number']
    random.shuffle(VALUES)
    request.session['output'] = []

    for num in range(0, int(animal)):
        request.session['output'].append(VALUES[num])

    return render(request, 'surpriseMe/results.html')
