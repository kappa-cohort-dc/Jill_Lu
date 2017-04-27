from __future__ import unicode_literals

from django.db import models
class AppointmentsManager(models.Manager):
    def validate(self, postData, user_id):
        flag = False
        error =[]

        try:
            appointments = Appointments.objects.get(appt_date = postData['appt_date'], appt_time= postData['appt_time'])

        except self.model.DoesNotExist:
            flag = True

        if flag is False:
            error.append('This appointment is not available, please try again.')
            return (flag, error)
        else:
            self.create(appt_date= postData['appt_date'], appt_time= postData['appt_time'], user_id= user_id)
            return (flag, error)
# Create your models here.
class Users(models.Model):
    first_name = models.CharField(max_length= 100)
    last_name = models.CharField(max_length= 100)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class Appointments(models.Model):
    appt_date = models.DateField()
    appt_time = models.TimeField()
    user = models.ForeignKey(Users)
    objects = AppointmentsManager()
