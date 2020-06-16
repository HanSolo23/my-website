from django.urls import path
from .views import *

urlpatterns = [
    path('', portfolio_foto_slider, name='portfolio_url'),
    path('upload/', UploadImage.as_view(), name='upload_image_url'),
    path('<str:slug>', portfolio_foto_detail, name='portfolio_detail_url'),
    path('<str:slug>/delete/', DeleteImage.as_view(), name='delete_image_url'),
    path('video/', portfolio_video, name='portfolio_video_url'),
    path('video/upload', UploadVdo.as_view(), name='upload_video_url'),
    path('video/<str:slug>', portfolio_video_detail, name='portfolio_video_detail_url'),
    path('video/<str:slug>/delete', DeleteVdo.as_view(), name='delete_video_url'),
]
