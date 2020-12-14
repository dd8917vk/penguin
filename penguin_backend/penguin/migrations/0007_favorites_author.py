# Generated by Django 3.1.4 on 2020-12-14 15:47

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('penguin', '0006_auto_20201214_1514'),
    ]

    operations = [
        migrations.AddField(
            model_name='favorites',
            name='author',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
