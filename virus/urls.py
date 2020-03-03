from django.contrib import admin
from django.urls import path, include
from virus import views

urlpatterns = [
    path('', views.main, name="main"),
    path('about/', views.about, name="about"),
    path('hospital/', views.hospital, name="hospital"),
    path('map/', views.map, name="map"),
    path('virus/', views.virus, name="virus"),
]
