from django.urls import path
from . import views

urlpatterns = [
    path('' , views.home),
    path('About/' , views.about),
    path('Gallery/' , views.gallery),
    path('Contact/' , views.contact),
]
