from django.shortcuts import render, redirect
import random
from datetime import datetime

def index(request):
    if not 'gold' in request.session:
        request.session['gold'] = 0

    if not 'activity' in request.session:
        request.session['activity'] = []
    return render(request, 'ninjaGold/index.html')

def show(request):
    if request.method == 'POST':
        if request.POST['place'] == 'farm':
            number = random.randrange(10,21)
            request.session['gold'] = request.session['gold'] + number
            request.session['activity'].insert(0,'Earned {} golds from the farm. -{}'.format(number, datetime.now()))
            return redirect('/')
        elif request.POST['place'] == 'cave':
            number = random.randrange(5,11)
            request.session['gold'] = request.session['gold'] + number
            request.session['activity'].insert(0,'Earned {} golds from the cave. -{}'.format(number, datetime.now()))
            return redirect('/')
        elif request.POST['place'] == 'house':
            number = random.randrange(2,6)
            request.session['gold'] = request.session['gold'] + number
            request.session['activity'].insert(0,'Earned {} golds from the house. -{}'.format(number, datetime.now()))
            return redirect('/')
        elif request.POST['place'] == 'casino':
            number = random.randrange(-50, 51)
            request.session['gold'] = request.session['gold'] + number

            if number >= 0:
                request.session['activity'].insert(0,'Earned {} golds from the casino. -{}'.format(number, datetime.now()))
            elif number < 0:
                request.session['activity'].insert(0,'Lost {} golds from the casino. -{}'.format(number, datetime.now()))
            return redirect('/')
    else:
        pass

    return redirect ('/')
