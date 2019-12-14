from django.db import models
from django.conf import settings

# Create your models here.

class Entry(models.Model):
    content = models.TextField(blank=True)
    created = models.DateTimeField(auto_now_add=True)
    posted_by = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.CASCADE)
