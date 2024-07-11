from django.urls import path
from . import views

urlpatterns = [
    path('api/team/', views.team, name='team'),
    path('api/team/<int:team_id>/', views.team, name='team_detail'),
]