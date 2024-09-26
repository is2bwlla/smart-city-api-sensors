from django.contrib.auth.models import User
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from app_smart.api import serializers
from rest_framework.response import Response
from rest_framework import status, viewsets
from ..models import Sensor

class CreateUserAPIViewSet(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerialiazier
    permission_classes = [IsAdminUser]
    
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
    
class SensorViewSet(viewsets.ModelViewSet):
    queryset = Sensor.objects.all()
    serializer_class = serializers.SensorSerializer
    permission_classes = [IsAuthenticated]
    
    