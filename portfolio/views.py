from django.shortcuts import render, redirect, HttpResponseRedirect, get_object_or_404
from .models import *
from django.views.generic import View, CreateView
from .forms import UploadImgForm
from django.urls import reverse_lazy, reverse
from django.contrib.auth.mixins import LoginRequiredMixin


def portfolio_foto_slider(request):
    images = UploadImg.objects.all()
    return render(request, 'portfolio/index.html', context={'images': images, 'img': True})


class PortfolioFotoDetail(LoginRequiredMixin, View):
    raise_exception = True

    def get(self, request, slug):
        image = get_object_or_404(UploadImg, slug__iexact=slug)
        return render(request, 'portfolio/image.html', context={'image': image, 'admin_object': image, 'delete': True})


class UploadImage(LoginRequiredMixin, View):
    raise_exception = True

    def get(self, request):
        form = UploadImgForm()
        return render(request, 'portfolio/upload_image.html', context={'form': form})

    def post(self, request):
        bound_form = UploadImgForm(request.POST, request.FILES)
        if bound_form.is_valid():
            new_image = bound_form.save()
            return redirect(reverse('portfolio_url'))
        return render(request, 'portfolio/upload_image.html', context={'form': bound_form})


class DeleteImage(LoginRequiredMixin, View):
    raise_exception = True

    def get(self, request, slug):
        image = UploadImg.objects.get(slug__iexact=slug)
        return render(request, 'portfolio/delete_image.html', context={'image': image})

    def post(self, request, slug):
        image = UploadImg.objects.get(slug__iexact=slug)
        image.delete()
        return redirect(reverse('portfolio_url'))
