from django.contrib.auth.models import User
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from app_smart.api import serializers
from rest_framework import status, viewsets
from ..models import Sensor, TemperaturaData
from app_smart.api.filters import SensorFilter
from django_filters.rest_framework import DjangoFilterBackend
from django.http import JsonResponse
from django.views import View



class CreateUserAPIViewSet(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    permission_classes = [IsAdminUser]
    
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
    
class SensorViewSet(viewsets.ModelViewSet):
    queryset = Sensor.objects.all()
    serializer_class = serializers.SensorSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_class = SensorFilter
    
class TemperaturaDataViewSet(viewsets.ModelViewSet):
    queryset = TemperaturaData.objects.all()
    serializer_class = serializers.TemperaturaDataSerializer
    permission_classes = [IsAuthenticated]