from django.urls import path, include
from . import views
from app_smart.api.viewsets import CreateUserAPIViewSet, SensorViewSet, TemperaturaDataViewSet, UmidadeDataViewSet, LuminosidadeDataViewSet, ContadorDataViewSet
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework.routers import DefaultRouter
from app_smart.api.filters import (
    SensorFilterView, 
    TemperaturaFilterView, 
    UmidadeFilterView,
    LuminosidadeFilterView,
    ContadorFilterView 
)

router = DefaultRouter() 
router.register(r'sensors', SensorViewSet)
router.register(f'temperatura', TemperaturaDataViewSet)
router.register(r'umidade', UmidadeDataViewSet)
router.register(r'luminosidade', LuminosidadeDataViewSet)
router.register(r'contador', ContadorDataViewSet)

urlpatterns = [
    path('', views.open_index, name="open_index"),
    path('api/create_user/', CreateUserAPIViewSet.as_view(), name='create_user'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/', include(router.urls)),
    path('api/sensor_filter/', SensorFilterView.as_view(), name='senso_filter'),
    path('api/temperatura_filter/', TemperaturaFilterView.as_view(), name='temperatura_filter'),
    path('api/umidade_filter/', UmidadeFilterView.as_view(), name='umidade_filter'),
    path('api/luminosidade_filter/', LuminosidadeFilterView.as_view(), name='luminosidade_filter'),
    path('api/contador_filter/', ContadorFilterView.as_view(), name='contador_filter'),
    path('upload/sensors/', views.upload_sensores_view, name='upload_sensores'),
    path('upload/contador/', views.upload_contador_view, name='upload_contador'),
    path('upload/luminosidade/', views.upload_luminosidade_view, name='upload_luminosidade'),
    path('upload/temperatura/', views.upload_temperatura_view, name='upload_temperatura'),
    path('upload/umidade/', views.upload_umidade_view, name='upload_umidade'),
]
