from __future__ import unicode_literals
from django.db import models
import bcrypt
# import re
# EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class UsersManager(models.Manager):
    def register(self, postData):
        name = postData['name']
        username = postData['username']
        password = postData['password']
        confirm_password = postData['confirm_password']
        doh = postData['doh']

        flag = False
        errors = []

        if len(name)< 3:
            flag = True
            errors.append('Name must be at least 2 characters')
        if not name.isalpha():
            flag = True
            errors.append('First name can only contain letters')

        if len(username)< 3:
            flag = True
            errors.append('Username must be at least 2 characters')

        if not username.isalpha():
            flag = True
            errors.append('Username can only contain letters')

        if not password:
            flag= True
            errors.append('Password field cannot be blank')
        # if not password.isalpha():
        #     flag= True
        #     errors.append('Password can only contain letters')
        if len(password)< 8:
            flag = True
            errors.append('Password must be at least 8 characters')

        if password != confirm_password:
            flag = True
            errors.append('Password confirmation must match password')
        if flag is False:
            user = Users.objects.create(name=name, username=username, password=password, doh=doh)
            return (flag, user)

        else:
            return (flag, errors)

    def login(self, postData):
        flag= False
        errors=[]

        try:
            log_user = Users.objects.get(username= postData['username'])
        except self.model.DoesNotExist:
            flag = True
            errors.append('username does not exist in database')
            return errors

        if postData['password']!= log_user.password:
            flag = True
            errors.append('Password is invalid')
            return errors
        else:
            return False

class Users(models.Model):
    name = models.CharField(max_length = 100)
    username = models.CharField(max_length= 100)
    password = models.CharField(max_length= 100)
    doh = models.DateTimeField(auto_now= False)
    created_at= models.DateTimeField(auto_now_add= True)
    updated_at= models.DateTimeField(auto_now=True)
    objects= UsersManager()
