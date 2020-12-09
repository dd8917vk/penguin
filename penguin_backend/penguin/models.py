from django.db import models

# Create your models here.
class Commands(models.Model):
    command = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    link = models.CharField(max_length=255)
    html = models.TextField()
    favorite = models.BooleanField(default=False)

    def __str__(self):
        return self.command
