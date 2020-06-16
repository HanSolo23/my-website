from django.shortcuts import render
from portfolio.models import UploadImg

def portfolio_main_foto_slider(request):
    images = UploadImg.objects.all()
    return render(request, 'all/index.html', context={'images': images})
