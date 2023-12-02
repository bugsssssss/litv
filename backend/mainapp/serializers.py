from rest_framework import serializers
from .models import *


class ProductSerializer(serializers.ModelSerializer):

    os_type = serializers.SerializerMethodField()
    voice_control = serializers.SerializerMethodField()

    def get_os_type(self, obj):
        try:
            if obj.os_type == 'android':
                return 'api/pictures/products/android.png'
            else:
                return 'api/pictures/products/webos.png'
        except:
            pass

    def get_voice_control(self, obj):
        if obj.voice_control:
            return 'Есть'
        else:
            return 'Нет'

    class Meta:
        model = Product
        fields = (
            'id',
            'name',
            'picture',
            'picture_2',
            'os_type',
            'is_new',
            'display',
            'resolution',
            'brightness',
            'contrast',
            'voice',
            'ac',
            'system',
            'wifi',
            'ram',
            'voice_control',
            'tech',
            'price',
            'is_published',
            'url'
        )


class PartnersSerializer(serializers.ModelSerializer):

    background_color = serializers.SerializerMethodField()

    def get_background_color(self, obj):
        return obj.background_color

    class Meta:
        model = Partners
        fields = (
            'id',
            'name',
            'image',
            'background_color',
            'info'
        )


class AdvertsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Adverts
        fields = (
            'id',
            'name',
            'image',
            'info'
        )


class WarrantySerializer(serializers.ModelSerializer):
    class Meta:
        model = Warranty
        fields = (
            'id',
            'name',
            'series',
            'talon',
            'phone',
            'city',
            'dealer'
        )


class WarrantyDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = WarrantyData
        fields = (
            'id',
            'series'
        )


class DealerRequestSerializer(serializers.ModelSerializer):

    class Meta:
        model = DealerRequest
        fields = (
            'name',
            'inn',
            'city',
            'shops',
            'sales_type',
            'text'
        )
