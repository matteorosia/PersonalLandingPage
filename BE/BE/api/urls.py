from django.urls import path
from .views import get_contents, create_content, get_content_by_title, update_content, user_profile
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path('token/refresh/', TokenRefreshView.as_view(), name="token_refresh"),
    path('contents/', get_contents, name='get_contents'),
    path('contents/create', create_content, name='create_content'),
    path('contents/<str:title>/', get_content_by_title),
    path('contents/<str:title>/update/', update_content),
    path('profile/', user_profile, name='user_profile'),
]
