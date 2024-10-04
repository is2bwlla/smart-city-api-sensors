from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer, CharField, FileField
from django.contrib.auth.hashers import make_password
from app_smart.models import Sensor, TemperaturaData, UmidadeData

class UserSerializer(ModelSerializer):
    password = CharField(write_only=True)
    
    def create(self, validated_data):
        # Serve para criptografar a senha antes de salvar o usuário
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)
    
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}
        
class SensorSerializer(ModelSerializer):
    class Meta: 
        model = Sensor
        fields = '__all__'              # Isso serializa todos os campos do modelo sensor
        
class CSVUploadSerializer(ModelSerializer):
    file = FileField()
    
class TemperaturaDataSerializer(ModelSerializer):
    class Meta:
        model = TemperaturaData
        fields = '__all__'
        
class UmidadeDataSerializer(ModelSerializer):
    class Meta:
        model = UmidadeData
        fields = '__all__'