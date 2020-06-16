from django.contrib import admin
from .models import UploadImg, UploadVideo

admin.site.register(UploadImg)
admin.site.register(UploadVideo)