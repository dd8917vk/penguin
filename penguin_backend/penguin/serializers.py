from rest_framework import serializers
from .models import Commands

# class BeerSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Beer
#         fields = ['name', 'price', 'beer_type', 'brand', 'review']
class CommandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Commands
        fields = '__all__'