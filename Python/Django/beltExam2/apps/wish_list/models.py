from __future__ import unicode_literals
from django.db import models
from ..log_reg.models import Users

class ProductsManager(models.Manager):
    def validate(self, postData, user_id):
        item = postData['item']
        flag = False
        errs = []

        if not item:
            flag= True
            errs.append('Item name cannot be left blank')
        if len(item) <=3:
            flag = True
            errs.append('Item name must be at least 3 characters')
        if flag is False:
            item = self.create(item = postData['item'], user_id= user_id)
            print item
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
