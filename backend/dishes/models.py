from django.db import models

class Dish(models.Model):
    title = models.CharField(max_length=26)
    image = models.ImageField(upload_to='images/')
    prep_time = models.IntegerField()

    class Meta:
        ordering = ['title']

    def __str__(self):
        return self.title