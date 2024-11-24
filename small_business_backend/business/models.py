from django.db import models

# Create your models here.

class Business(models.Model):
    business_id = models.IntegerField(null=True)
    business_name = models.TextField(null=True)
    type = models.TextField(null=True)
    description = models.TextField(null=True)
    social_media = models.TextField(null=True)
    email = models.TextField(null=True)

    def __str__(self):
        return self.business_name