# Generated by Django 3.1.4 on 2020-12-14 15:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('penguin', '0005_auto_20201214_1513'),
    ]

    operations = [
        migrations.RenameField(
            model_name='favorites',
            old_name='comments',
            new_name='comment',
        ),
    ]