from django.shortcuts import render, redirect
from .models import Users, Appointments
from django.contrib import messages
from django.core.urlresolvers import reverse
# Create your views here.
def index(request):
    return render(request, 'appt_app/index.html')

def process(request):
    appointment = Appointments.objects.validate(request.POST, request.session['log_user'])
    if appointment[0] is False:
        request.session['error']= appointment[1]
        return redirect(reverse ("appt_app:index"))
    else:
        return redirect(reverse ("appt_app:success"))
def success(request):
    context ={
        'appointment': Appointments.objects.filter(user_id = request.session['log_user']),

    }
    print context['appointment']
    return render(request, 'appt_app/success.html', context)
