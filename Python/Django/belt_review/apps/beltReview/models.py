from __future__ import unicode_literals

from django.db import models
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class UsersManager(models.Manager):
    def register(self, postData):
        name = postData['name']
        alias = postData['alias']
        email = postData['email']
        password = postData['password']
        confirm_password = postData['confirm_password']

        flag = False
        errors = []

        if len(name)< 2:
            flag = True
            errors.append('Name must be at least 2 characters')
        if not name.isalpha():
            flag = True
            errors.append('Name can only contain letters')
        if len(alias)< 2:
            flag = True
            errors.append('Alias must be at least 2 characters')
        if not alias.isalpha():
            flag = True
            errors.append('Alias can only contain letters')
        if not email:
            flag= True
            errors.append('Email field cannot be blank')
        if not EMAIL_REGEX.match(email):
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
            user = Users.objects.create(name =name, alias= alias, email=email, password=password)
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
        if postData['password']!= log_user.password:
            flag = True
            errors.append('Password is invalid')
            return errors
        else:
            return False
# Create your models here.
class Users(models.Model):
    name = models.CharField(max_length = 50)
    alias = models.CharField(max_length= 50)
    email = models.CharField(max_length= 50)
    password = models.CharField(max_length = 50)
    created_at = models.DateTimeField(auto_now_add= True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = UsersManager()

class Books(models.Model):
    title = models.CharField(max_length = 100)
    author = models.CharField(max_length= 100)
    created_at = models.DateTimeField(auto_now_add= True)
    updated_at = models.DateTimeField(auto_now = True)

class Reviews(models.Model):
    content = models.TextField()
    rating = models.IntegerField()
    user = models.ForeignKey(Users)
    book = models.ForeignKey(Books)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
