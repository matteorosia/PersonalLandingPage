from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Content
from .serializer import ContentSerializer

@api_view(['GET'])
def get_contents(request):
    contents = Content.objects.all()
    serializeData = ContentSerializer(contents, many = True).data
    return Response(serializeData)

@api_view(['GET'])
def get_content_by_title(request, title):
    try:
        content = Content.objects.get(title=title)
    except Content.DoesNotExist:
        return Response({'error': 'Content not found'}, status=status.HTTP_404_NOT_FOUND)
    serialized = ContentSerializer(content)
    return Response(serialized.data)

@api_view(['POST'])
def create_content(request):
    data = request.data
    serializer = ContentSerializer(data = data)
    if serializer .is_valid():
        serializer.save()
        return Response(serializer.data, status = status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
@api_view(['PUT'])
def update_content(request, title):
    try:
        content = Content.objects.get(title=title)
    except Content.DoesNotExist:
        return Response({'error': 'Content not found'}, status=status.HTTP_404_NOT_FOUND)

    serializer = ContentSerializer(content, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
