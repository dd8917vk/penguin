from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CommandSerializer
from .models import Commands


@api_view(['GET'])
def command_overview(request):
    api_urls = {
        'List': '/command_list/',
        #'Detail': '/beerview/<int:pk>/',
        'DetailByName': '/commandview/<str:name>/',
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