from django.urls import path
from .views import *

urlpatterns = [
    path('', portfolio_main_foto_slider, name='website')
]
