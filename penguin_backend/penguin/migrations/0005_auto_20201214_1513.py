# Generated by Django 3.1.4 on 2020-12-14 15:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('penguin', '0004_favorites'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='favorites',
            name='author',
        ),
        migrations.RemoveField(
            model_name='post',
            name='author',
        ),
    ]
