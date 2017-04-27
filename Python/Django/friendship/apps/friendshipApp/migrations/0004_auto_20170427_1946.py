# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-04-27 19:46
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('friendshipApp', '0003_auto_20170427_1917'),
    ]

    operations = [
        migrations.CreateModel(
            name='Friendship',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.RemoveField(
            model_name='user',
            name='friend',
        ),
        migrations.AddField(
            model_name='friendship',
            name='friend1',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='friend1', to='friendshipApp.User'),
        ),
        migrations.AddField(
            model_name='friendship',
            name='friend2',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='friend2', to='friendshipApp.User'),
        ),
    ]