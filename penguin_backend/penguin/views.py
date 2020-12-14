from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CommandSerializer, PostSerializer, FavoritesSerializer
from .models import Commands, Post, Favorites, User

#Commands
@api_view(['GET'])
def command_overview(request):
    api_urls = {
        'List': '/command_list/',
        #'Detail': '/beerview/<int:pk>/',
        'DetailByName': '/commandview/<str:name>/',
        'PostList': '/post_list/',
        'PostCreate': '/post_create/',
        'FavoriteList': '/favorites_list/',
        'FavoriteCreate': '/favorites_create/',
        'FavoriteUpdate': '/favorites_update/<int:pk>/',
        'FavoriteDelete': '/favorites_delete/<int:pk>/',
        # 'Create': '/beercreate/',
        # 'Update': '/beerupdate/<int:pk>/',
        # 'Delete': '/beerdelete/<int:pk/>',
    }
    return Response(api_urls)

@api_view(['GET'])
def command_list(request):
    commands = Commands.objects.all()
    #many=true, if querying multiple items
    serializer = CommandSerializer(commands, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def command_view_by_name(request, command):
    command = Commands.objects.filter(command=command)
    if not command:
        return Response('Data not found')
    #many=true, if querying multiple items
    serializer = CommandSerializer(command.first(), many=False)
    return Response(serializer.data)

#Post
@api_view(['GET'])
def post_list(request):
    posts = Post.objects.all()
    #many=true, if querying multiple items
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def post_create(request):
    serializer = PostSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

#Favorites
@api_view(['GET'])
def favorites_list(request):
    favorites = Favorites.objects.all()
    #many=true, if querying multiple items
    serializer = FavoritesSerializer(favorites, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def favorites_create(request):
    serializer = FavoritesSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def favorites_update(request, pk):
    try:
        favorites_update = Favorites.objects.get(id=pk)
    except:
        return Response('Could not find the object you were trying to update.')
    serializer = FavoritesSerializer(instance=favorites_update, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def favorites_delete(request, pk):
    try:
        delete_favorite = Favorites.objects.get(id=pk)
        delete_favorite.delete()
    except:
        return Response('Could not find the object you were trying to delete.')
    return Response('Item deleted successfully')

# @api_view(['GET'])
# def beer_view(request, pk):
#     try:
#         beers = Beer.objects.get(id=pk)
#     except:
#         return Response('Data not found')
#     #many=true, if querying multiple items
#     serializer = BeerSerializer(beers, many=False)
#     return Response(serializer.data)


# @api_view(['POST'])
# def beer_create(request):
#     serializer = BeerSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#     return Response(serializer.data)

# @api_view(['POST'])
# def beer_update(request, pk):
#     try:
#         beer_update = Beer.objects.get(id=pk)
#     except:
#         return Response('Could not find the object you were trying to update.')
#     serializer = BeerSerializer(instance=beer_update, data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#     return Response(serializer.data)

# @api_view(['DELETE'])
# def beer_delete(request, pk):
#     try:
#         beer_update = Beer.objects.get(id=pk)
#         beer_update.delete()
#     except:
#         return Response('Could not find the object you were trying to delete.')
#     return Response('Item deleted successfully'