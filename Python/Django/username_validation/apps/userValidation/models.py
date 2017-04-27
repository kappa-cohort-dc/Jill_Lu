from __future__ import unicode_literals

from django.db import models

# Create your models here.
class UsersManager(models.Manager):
    def login(self, postData):
        if len(postData['username']) < 8 or len(postData['username']) > 16:
            return {'error' : "Username must be between 8 and 16 characters"}
        else:
            return True
            
class Users(models.Model):
    username = models.CharField(max_length= 50)
    created_at = models.DateTimeField(auto_now_add =True)
    updated_at = models.DateTimeField(auto_now= True)
    objects = UsersManager()
