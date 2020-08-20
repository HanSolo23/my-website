from django.urls import path
from .views import *

urlpatterns = [
    path('', posts_list, name='blog_url'),
    path('post/create', PostCreate.as_view(), name='post_create_url'),
    path('post/<str:slug>', post_detail, name='post_detail_url'),
    path('post/<str:slug>/delete', PostDelete.as_view(), name='post_delete_url')
]
