from __future__ import unicode_literals
from django.db import models
import bcrypt
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class UsersManager(models.Manager):
    def register(self, postData):
        first_name = postData['first_name']
        last_name = postData['last_name']
        user_email = postData['email']
        password = postData['password']
        confirm_password = postData['confirm_password']

        flag = False
        errors = []

        if len(first_name)< 2:
            flag = True
            errors.append('First name must be at least 2 characters')
        if not first_name.isalpha():
            flag = True
            errors.append('First name can only contain letters')

        if len(last_name)< 2:
            flag = True
            errors.append('Last name must be at least 2 characters')

        if not last_name.isalpha():
            flag = True
            errors.append('Last name can only contain letters')

        if not user_email:
            flag= True
            errors.append('Email field cannot be blank')
        if not EMAIL_REGEX.match(user_email):
            flag = True
            errors.append('Email format is invalid')

        if not password:
            flag= True
            errors.append('Password field cannot be blank')
        if len(password)< 8:
            flag = True
            errors.append('Password must be at least 8 characters')

        if password != confirm_password:
            flag = True
            errors.append('Password confirmation must match password')
        if flag is False:
            # hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
            user = Users.objects.create(first_name =first_name, last_name=last_name, email=user_email, password=password)
            print "*" * 50
            return (flag, errors)


        else:
            return (flag, errors)
            print Users.objects.all()
            print "=+" * 50

    def login(self, postData):
        flag= False
        errors=[]

        try:
            log_user = Users.objects.get(email = postData['email'])
        except self.model.DoesNotExist:
            flag = True
            errors.append('Email does not exist in database')
            return errors
        # hashed = bcrypt.hashpw(postData['password'].encode(), bcrypt.gensalt())
        # print hashed
        # print log_user.password
        if postData['password']!= log_user.password:
            flag = True
            errors.append('Password is invalid')
            return errors
        else:
            return False


class Users(models.Model):
    first_name = models.CharField(max_length= 100)
    last_name = models.CharField(max_length= 100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = UsersManager()
