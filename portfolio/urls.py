from django.urls import path
from .views import *

urlpatterns = [
    path('', portfolio_slider, name='portfolio_url'),
    path('upload/', UploadImage.as_view(), name='upload_image_url'),
    path('<str:slug>', portfolio_detail, name='portfolio_detail_url'),
    path('<str:slug>/delete/', DeleteImage.as_view(), name='delete_image_url'),
]
