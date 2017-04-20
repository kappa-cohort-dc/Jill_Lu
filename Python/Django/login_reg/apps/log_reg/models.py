from __future__ import unicode_literals
from django.db import models
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class UserManager(models.Manager):
    def login(self, postData):
        user_email = postData['user_email']
        user_password = postData['user_password']
        try:
            preExist= self.get(email= user_email)
        except self.model.DoesNotExist:
            preExist = False
        if preExist == False:
            return {'error': 'Email is invalid'}
        else:
            result = Users.objects.get(email= user_email)
            if result.password == user_password:
                return True
            else:
                return {'error': 'Email does not match password'}

    def registration(self, postData):
        first_name = postData['first_name']
        last_name = postData['last_name']
        user_email = postData['user_email']
        password = postData['password']
        confirm_password = postData['confirm_password']

        if len(first_name)< 2:
            return {'error': 'First name must be at least 2 characters'}
        elif not first_name.isalpha():
            return {'error': 'First name can only contain letters'}
        elif len(last_name)< 2:
            return {'error': 'Last name must be at least 2 characters'}
        elif not last_name.isalpha():
            return {'error': 'Last name can only contain letters'}
        elif not EMAIL_REGEX.match(email):
            return {'error': 'Email format is invalid'}
        elif len(password)< 8:
            return {'error': 'Password must be at least 8 characters'}
        elif password != confirm_password:
            return {'error': 'Password confirmation must match password'}
        else:
            return True
            
class Users(models.Model):
    first_name = models.CharField(max_length= 100)
    last_name = models.CharField(max_length= 100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    object = UserManager()
