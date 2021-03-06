# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-04-24 23:21
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('beltReview', '0002_remove_books_user_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='reviews',
            old_name='user_id',
            new_name='user',
        ),
        migrations.RemoveField(
            model_name='books',
            name='review_id',
        ),
        migrations.AddField(
            model_name='reviews',
            name='book',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='beltReview.Books'),
            preserve_default=False,
        ),
    ]
