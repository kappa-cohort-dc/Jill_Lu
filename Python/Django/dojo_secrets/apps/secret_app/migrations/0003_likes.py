# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-04-25 22:18
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('secret_app', '0002_auto_20170425_2107'),
    ]

    operations = [
        migrations.CreateModel(
            name='Likes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('secret', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='secret_app.Secrets')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='secret_app.Users')),
            ],
        ),
    ]