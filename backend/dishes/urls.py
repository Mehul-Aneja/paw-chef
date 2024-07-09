from django.urls import path
from . import views

urlpatterns = [
    path('api/dishes/', views.index, name='index'),
]
