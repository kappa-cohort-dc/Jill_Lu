from __future__ import unicode_literals

from django.db import models

# def validate(self, postData):
#     try:
#         client = Clients.objects.get(business_name= request.POST['business_name']
#     except self.model.DoesNotExist:
#         client = self.create(business_name= request.POST['business_name'], email= request.POST['email'], phone=request.POST['phone'], notes= request.POST['notes'])
# Create your models here.
class Clients(models.Model):
    business_name = models.CharField(max_length=100)
    email= models.CharField(max_length=100)
    phone= models.CharField(max_length= 10)
    notes = models.TextField()
    created_at= models.DateTimeField(auto_now_add=True)
    updated_at= models.DateTimeField(auto_now= True)

class Projects(models.Model):
    project_name= models.CharField(max_length=100)
    project_notes= models.TextField()
    client = models.ForeignKey(Clients, related_name= 'client_proj')
    created_at= models.DateTimeField(auto_now_add=True)
    updated_at= models.DateTimeField(auto_now= True)
