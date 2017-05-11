from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Users(models.Model):
    username= models.CharField(max_length= 100)
    created_at= models.DateTimeField(auto_now_add= True)
    updated_at= models.DateTimeField(auto_now= True)
class Interests(models.Model):
    interest= models.CharField(max_length= 100)
    created_at= models.DateTimeField(auto_now_add= True)
    updated_at= models.DateTimeField(auto_now= True)
class UserInterest(models.Model):
    user = models.ForeignKey(Users, related_name= 'curr_user')
    interest = models.ForeignKey(Interests, related_name= 'user_interest' )
