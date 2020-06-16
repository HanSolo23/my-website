from django.shortcuts import render, redirect, HttpResponseRedirect, get_object_or_404
from .models import *
from django.views.generic import View, CreateView
from .forms import UploadImgForm, UploadVideoForm
from django.urls import reverse_lazy, reverse
from django.contrib.auth.mixins import LoginRequiredMixin


def portfolio_foto_slider(request):
    images = UploadImg.objects.all()
    return render(request, 'portfolio/index.html', context={'images': images, 'img': True})


def portfolio_foto_detail(request, slug):
    image = get_object_or_404(UploadImg, slug__iexact=slug)
    return render(request, 'portfolio/image.html', context={'image': image, 'admin_object': image, 'delete': True})


def portfolio_video(request):
    videos = UploadVideo.objects.all()
    return render(request, 'portfolio/index_video.html', context={'videos': videos, 'vdo': True})


def portfolio_video_detail(request, slug):
    video = get_object_or_404(UploadVideo, slug__iexact=slug)
    return render(request, 'portfolio/video.html', context={'video': video, 'admin_object': video, 'delete': True})


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


class UploadVdo(LoginRequiredMixin, View):
    raise_exception = True

    def get(self, request):
        form = UploadVideoForm()
        return render(request, 'portfolio/upload_video.html', context={'form': form})

    def post(self, request):
        bound_form = UploadVideoForm(request.POST, request.FILES)
        if bound_form.is_valid():
            new_video = bound_form.save()
            return redirect(reverse('portfolio_video_url'))
        return render(request, 'portfolio/upload_video.html', context={'form': bound_form})


class DeleteVdo(LoginRequiredMixin, View):
    raise_exception = True

    def get(self, request, slug):
        video = UploadVideo.objects.get(slug__iexact=slug)
        return render(request, 'portfolio/delete_video.html', context={'video': video})

    def post(self, request, slug):
        video = UploadVideo.objects.get(slug__iexact=slug)
        video.delete()
        return redirect(reverse('portfolio_video_url'))
