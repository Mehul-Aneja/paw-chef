from django.urls import path
from . import views

urlpatterns = [
    path('api/dishes/', views.index, name='index'),
    path('api/dishes/add/', views.add_dish, name='add_dish'),
]
