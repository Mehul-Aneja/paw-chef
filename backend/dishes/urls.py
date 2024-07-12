from django.urls import path
from . import views

urlpatterns = [
    path('api/dishes/', views.dishes, name='dishes'),
    path('api/dishes/delete/<int:dish_id>/', views.delete, name='delete'),
    path('health/', views.health_check, name='health_check'),
]
