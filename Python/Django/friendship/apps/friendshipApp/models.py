from __future__ import unicode_literals

from django.db import models

# Create your models here.

class User(models.Model):
    name = models.CharField(max_length = 100)

class Friendship(models.Model):
    user = models.ForeignKey(User, related_name ='friend1')
    friend = models.ForeignKey(User, related_name ='friend2')
