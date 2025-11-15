from django.db import models
from django.contrib.auth.models import User

class Content(models.Model):
    title = models.CharField(max_length=30)
    value = models.CharField(max_length=2500)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='contents',default=1)


    def __str__(self):
        return self.title