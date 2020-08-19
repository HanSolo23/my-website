from django.shortcuts import render, redirect, HttpResponseRedirect, get_object_or_404
from .models import *
from django.views.generic import View, CreateView
from django.urls  import reverse_lazy, reverse
from django.contrib.auth.mixins import LoginRequiredMixin

def posts_list(request):
    posts = Post.objects.all()
    return render(request, 'blog/index.html', context={'posts' : posts, 'pst' : True})

def post_detail(request, slug):
    post = get_object_or_404(Post, slug__iexact=slug)
    return render(request, 'blog/post.html', context={'post' : post, 'admin_object' : post, 'delete' : True})
