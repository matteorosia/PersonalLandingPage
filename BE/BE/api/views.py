from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status

from .models import Content
from .serializer import ContentSerializer

# PUBLIC: lista contenuti
@api_view(['GET'])
@permission_classes([AllowAny])
def get_contents(request):
    qs = Content.objects.all().order_by('-created_at')
    serializer = ContentSerializer(qs, many=True)
    return Response(serializer.data)

# PROTECTED: creare contenuto
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_content(request):
    serializer = ContentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(author=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# GET by title (public)
@api_view(['GET'])
@permission_classes([AllowAny])
def get_content_by_title(request, title):
    try:
        c = Content.objects.get(title=title)
    except Content.DoesNotExist:
        return Response({'detail': 'Not found'}, status=status.HTTP_404_NOT_FOUND)
    serializer = ContentSerializer(c)
    return Response(serializer.data)

# UPDATE by title (protected)
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_content(request, title):
    try:
        c = Content.objects.get(title=title)
    except Content.DoesNotExist:
        return Response({'detail': 'Not found'}, status=status.HTTP_404_NOT_FOUND)

    # optional: solo autore può modificare
    if c.author != request.user:
        return Response({'detail': 'Forbidden'}, status=status.HTTP_403_FORBIDDEN)

    serializer = ContentSerializer(c, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Protected profile route example
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_profile(request):
    user = request.user
    return Response({"username": user.username, "email": user.email})
