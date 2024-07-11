from django.db import models

class Team(models.Model):
    title = models.CharField(max_length=26)
    image = models.ImageField(upload_to='images/')

    class Meta:
        ordering = ['title']
    
    def __str__(self):
        return self.title