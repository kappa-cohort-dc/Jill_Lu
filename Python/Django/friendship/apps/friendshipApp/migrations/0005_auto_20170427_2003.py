# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-04-27 20:03
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('friendshipApp', '0004_auto_20170427_1946'),
    ]

    operations = [
        migrations.RenameField(
            model_name='friendship',
            old_name='friend2',
            new_name='friend',
        ),
        migrations.RenameField(
            model_name='friendship',
            old_name='friend1',
            new_name='user',
        ),
    ]
