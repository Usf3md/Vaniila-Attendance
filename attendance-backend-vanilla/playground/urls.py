from django.urls import path
from . import views


urlpatterns = [
    path('', views.latest),
    path('login/', views.login),
    # path('start/', views.start),
    # path('end/', views.end),
]
