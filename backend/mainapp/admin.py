from django.contrib import admin
from .models import *
# Register your models here.
from django.utils.safestring import mark_safe

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'created', 'updated')



@admin.register(Partners)
class PartnersAdmin(admin.ModelAdmin):
    list_display = ('name', 'created', 'updated')



@admin.register(Adverts)
class AdvertsAdmin(admin.ModelAdmin):
    list_display = (
                    'name', 
                    'created', 
                    'updated', 
                    'display_image'
                    )

    def display_image(self, obj):
        return mark_safe('<img src="api{url}" width="{width}" height={height} />'.format(
            url=obj.image.url,
            width=300,
            height=200,
        )
        )


@admin.register(Warranty)
class Warranty(admin.ModelAdmin):
    list_display = ('name', 'series', 'talon', 'phone', 'city', 'dealer', 'created', 'updated')


@admin.register(WarrantyData)
class WarrantyDataAdmin(admin.ModelAdmin):
    list_display = ['series', 'created']




@admin.register(DealerRequest)
class DealerRequestAdmin(admin.ModelAdmin):
    list_display = ['name', 'created']
