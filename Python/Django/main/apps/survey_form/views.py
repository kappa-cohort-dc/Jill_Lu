from django.shortcuts import render, HttpResponse, redirect, reverse

# Create your views here.
def index(request):
    return render(request, 'survey_form/index.html')

def process(request):
    if request.method == 'POST':
        request.session['name'] = request.POST['name']
        request.session['location'] = request.POST['location']
        request.session['language'] = request.POST['language']
        request.session['comment'] = request.POST['comment']

        if 'number' in request.session:
            request.session['number'] += 1
        else:
            request.session['number'] = 1

    return redirect('/result')

def result(request):
    return render(request, 'survey_form/results.html')
