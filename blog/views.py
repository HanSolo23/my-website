from django.shortcuts import render, redirect, HttpResponseRedirect, get_object_or_404
from .models import *
from django.views.generic import View, CreateView
from django.urls  import reverse_lazy, reverse
from django.contrib.auth.mixins import LoginRequiredMixin
from .forms import *

def posts_list(request):
    posts = Post.objects.all()
    return render(request, 'blog/index.html', context={'posts' : posts, 'pst' : True})


def post_detail(request, slug):
    post = get_object_or_404(Post, slug__iexact=slug)
    return render(request, 'blog/post.html', context={'post' : post, 'admin_object' : post, 'delete' : True})


class PostCreate(LoginRequiredMixin, View):
    raise_exception = True

    def get(self, request):
        form = PostForm()
        return render(request, 'blog/post_create.html', context={'form' : form})

    def post(self, request):
        bound_form = PostForm(request.POST)
        if bound_form.is_valid():
            new_post = bound_form.save()
            return redirect(reverse('blog_url'))
        return render(request, 'blog/post_create.html', context={'form' : bound_form})



class PostDelete(LoginRequiredMixin, View):
    raise_exception = True

    def get(self, request, slug):
        post = Post.objects.get(slug__iexact=slug)
        return render(request, 'blog/post_delete.html', context={'post' : post})

    def post(self, request, slug):
        post = Post.objects.get(slug__iexact=slug)
        post.delete()
        return redirect(reverse('blog_url'))