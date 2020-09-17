from django.db import models
from time import time
from django.utils.text import slugify
from django.shortcuts import reverse


def gen_slug(slg):
    new_slug = slugify(slg, allow_unicode=True)
    return new_slug + '-' + str(int(time()))


class UploadImg(models.Model):
    title = models.CharField(max_length=150, db_index=True, unique=True)
    slug = models.SlugField(max_length=150, blank=True, unique=True)
    body = models.ImageField(upload_to='images/')

    def get_absolute_url(self):
        return reverse('portfolio_detail_url', kwargs={'slug': self.slug})

    def get_delete_url(self):
        return reverse('delete_image_url', kwargs={'slug': self.slug})

    def save(self, *args, **kwargs):
        if not self.id:
            self.slug = gen_slug(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
