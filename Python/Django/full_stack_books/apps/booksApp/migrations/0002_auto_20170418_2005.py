# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-04-18 20:05
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('booksApp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='books',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
