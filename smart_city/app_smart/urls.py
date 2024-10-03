from django.urls import path, include
from . import views
from app_smart.api.viewsets import CreateUserAPIViewSet, SensorViewSet, TemperaturaDataViewSet
from .views import UploadCSVViewSet, upload_view, temperatura_view
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework.routers import DefaultRouter
from app_smart.api.filters import (SensorFilterView,)

router = DefaultRouter()
router.register(r'sensors', SensorViewSet)
router.register(r'upload_csv', UploadCSVViewSet, basename='upload_csv')
router.register(r'temperatura_csv', TemperaturaDataViewSet)

urlpatterns = [
    path('', views.open_index, name="open_index"),
    path('api/create_user/', CreateUserAPIViewSet.as_view(), name='create_user'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/', include(router.urls)),
    path('upload/', upload_view, name='upload_view'),
    path('api/sensor_filter/', SensorFilterView.as_view(), name='senso_filter'),
    path('api/temperatura/', temperatura_view, name='upload_temperatura'),
]
