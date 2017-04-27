from django.shortcuts import render, redirect
from .models import Users, Secrets, Likes
from django.contrib import messages
from django.core.urlresolvers import reverse
from django.db.models import Q, Count
# Create your views here.
def index(request):
    return render(request, 'secret_app/index.html')

def register(request):
    result = Users.objects.register(request.POST)
    if result[0] is False:
        request.session['log_user'] = request.POST['email']
        return redirect(reverse ('secret_app:secrets'))
    else:
        for err in result[1]:
            messages.error(request, err)
        return redirect ('/')

def login(request):
    result = Users.objects.login(request.POST)
    if result is False:
        user = Users.objects.get(email = request.POST['email'])
        request.session['log_user'] = user.id
        return redirect('/secrets')
    else:
        for errors in result:
            messages.error(request, errors)
            return redirect ('/')

def secret(request):
    context = {
        "secrets": Secrets.objects.all().order_by('-created_at'),
        "users": Users.objects.all(),
        "likes": Likes.objects.all(),
        "user_name": Users.objects.get(id=request.session['log_user'])
    }
    return render(request, 'secret_app/secret.html', context)

def recentSecrets(request):
    secret = Secrets.objects.create(content = request.POST['content'], user_id_id= request.session['log_user'])
    #need to pass user_id_id through for 'log_user'
    return redirect('/secrets')
def like(request, id):
    #must create relationship betweem like/secrets/users
    Likes.objects.create(user_id = request.session['log_user'], secret_id= id)
    # like = Likes.objects.annotate(num_like= Count('secret__content').order_by('num_like'))
    return redirect ('/secrets')
def logout(request):
    request.session.clear()
    return redirect('/')
