from django.db import models

# Create your models here.

class Parent(models.Model):
    Name = models.CharField(max_length=100)
    Prenom = models.CharField(max_length=100)
    Email = models.CharField()
    Tel = models.IntegerField()
    Username = models.CharField(max_length=100)
    Password = models.CharField(max_length=100)

    