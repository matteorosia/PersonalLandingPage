from django.urls import path
from .views import get_contents, create_content, get_content_by_title

urlpatterns = [
    path('contents/', get_contents, name='get_contents'),
    path('contents/create', create_content, name='create_content'),
    path('contents/<str:title>/', get_content_by_title),
]
