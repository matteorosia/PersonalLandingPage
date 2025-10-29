from django.db import models

class Content(models.Model):
    title = models.CharField(max_length=30)
    value = models.CharField(max_length=2500)

    def __str__(self):
        return self.title