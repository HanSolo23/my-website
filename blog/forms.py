from django import forms
from .models import Post
from django.core.exceptions import ValidationError


class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'body']

        widgets = {
            'title': forms.TextInput(attrs={'class': 'post__title__style'}),
            'body': forms.Textarea(attrs={'class': 'post__body__style'}),
        }

    def clean_title(self):
        new_title = self.cleaned_data['title']
        return new_title
