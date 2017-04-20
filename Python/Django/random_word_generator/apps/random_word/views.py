from django.shortcuts import render, redirect
from django.utils.crypto import get_random_string

def index(request):
    return render(request, 'random_word/index.html')

def randWord(request):
    if 'count' not in request.session:
        request.session['count'] = 1
        return render(request, 'random_word/index.html')
    else:
        pass

    if request.method == 'POST':
        request.session['rand_word'] = get_random_string(length = 14)
        print request.session['rand_word']
        request.session['count'] += 1
        return redirect('/')
