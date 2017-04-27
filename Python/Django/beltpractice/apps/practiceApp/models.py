from __future__ import unicode_literals
from django.db import models
from ..log_reg.models import Users

# Create your models here.
class Books(models.Model):
    title = models.CharField(max_length = 100)
    author = models.CharField(max_length = 100)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now= True)

class Reviews(models.Model):
    content = models.TextField()
    rating = models.IntegerField()
    user = models.ForeignKey(Users)
    book = models.ForeignKey(Books)
    created_at = models.DateTimeField(auto_now_add= True)
    updated_at = models.DateTimeField(auto_now =True)
