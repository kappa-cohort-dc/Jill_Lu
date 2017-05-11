from __future__ import unicode_literals
from django.db import models
from ..log_reg.models import Users

class ProductsManager(models.Manager):
    def vaidate(self, postData, user_id):
        flag = False
        errs = []

        if not postData['item']:
            flag= True
            errs.append('Item name cannot be left blank')
        if len(postData['item']) <=3:
            flag = True
            errs.append('Item name must be at least 3 characters')
        if flag is False:
            item = self.create(item = postData['item'])
            return (flag, item)
        else:
            return (flag, errs)
# Create your models here.
class Products(models.Model):
    item = models.CharField(max_length= 100)
    created_at = models.DateField(auto_now_add= True)
    user = models.ForeignKey(Users, related_name='user')
    wish = models.ManyToManyField(Users, related_name='wish_list')
    objects = ProductsManager()
