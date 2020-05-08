from django import forms
from .models import UploadImg
from django.core.exceptions import ValidationError


class UploadImgForm(forms.ModelForm):
    class Meta:
        model = UploadImg
        fields = ['title', 'body']

        widgets = {
            'title': forms.TextInput(attrs={'class': 'title__style'}),
            'body': forms.FileInput(attrs={'class': 'body__style'}),
        }

    def clean_title(self):
        new_title = self.cleaned_data['title'].lower()

        if new_title == 'upload':
            raise ValidationError('Title may not be "Upload"')
        if UploadImg.objects.filter(slug__iexact=new_title).count():
            raise ValidationError('Title must be unique.')
        return new_title