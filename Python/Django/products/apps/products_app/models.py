from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Products(models.Model):
    item_name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    weight = models.DecimalField(max_digits = 6, decimal_places=2)
    price = models.DecimalField(max_digits = 6, decimal_places=2)
    cost = models.DecimalField(max_digits = 6, decimal_places=2)
    category = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
