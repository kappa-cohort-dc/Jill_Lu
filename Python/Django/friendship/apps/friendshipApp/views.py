from django.shortcuts import render, redirect
from .models import User, Friendship

# Create your views here.
def index(request):
    all_friends = User.objects.all()
    context= {
        'user': User.objects.all(),
        'friends': Friendship.objects.all(),
    }
    return render(request, 'friendshipApp/index.html', context)

def process(request):
    x = User.objects.create(name= request.POST['name'])
    print x.name
    return redirect ('/')

def friend(request):
    friend1 = User.objects.get(id= request.POST['friend1'])
    friend2 = User.objects.get(id= request.POST['friend2'])

    Friendship.objects.create(user_id =friend1.id, friend_id=friend2.id )
    # friend1.friend.add(friend2)

    return redirect('/')
