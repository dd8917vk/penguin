from rest_framework import serializers
from .models import Commands, Post, Favorites

# class BeerSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Beer
#         fields = ['name', 'price', 'beer_type', 'brand', 'review']
class CommandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Commands
        fields = '__all__'
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'
class FavoritesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorites
        fields = '__all__'