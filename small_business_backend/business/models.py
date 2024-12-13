from django.db import models

# Create your models here.

class Business(models.Model):
    business_id = models.IntegerField(null=True)
    business_name = models.TextField(null=True)
    type = models.TextField(null=True)
    description = models.TextField(null=True)
    social_media = models.TextField(null=True, blank=True)  # New field for social media
    email = models.TextField(null=True, blank=True)  # New field for email
    instagram = models.TextField(null=True, blank=True)  # New field for Instagram
    website = models.URLField(null=True, blank=True)  # New field for website
    ratings = models.FloatField(null=True, blank=True)  # New field for ratings

    def __str__(self):
        return self.business_name