import django_filters
from app_smart.models import Sensor
from rest_framework import permissions
from app_smart.api import serializers
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from django.db.models import Q

class SensorFilter(django_filters.FilterSet):
    responsavel = django_filters.CharFilter(field_name='responsavel', lookup_expr='icontains')
    status_operacional = django_filters.CharFilter(field_name='status_operacional', lookup_expr='exact')
    tipo = django_filters.CharFilter(field_name='tipo', lookup_expr='exact')
    localizacao = django_filters.CharFilter(field_name='localizacao', lookup_expr='icontains')
    
    class Meta:
        model = Sensor
        fields = ['status_operacional', 'tipo', 'localizacao', 'responsavel']
        
class SensorFilterView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def post(self, request, *args, **kwargs):
        tipo = request.data.get('tipo', None)
        localizacao = request.data.get('localizacao', None)
        responsavel = request.data.get('responsavel', None)
        status_operacional = request.data.get('status_operacional', None)
        filters = Q() #Inicializa um filtro vazio
        
        if tipo:
            filters &= Q(tipo__icontains=tipo)
        if localizacao:
            filters &= Q(localizacao__icontains=localizacao)
        if responsavel:
            filters &= Q(responsavel__icontains=responsavel)
        if status_operacional is not None:
            filters &= Q(status_operacional=status_operacional)
            
        queryset = Sensor.objects.filter(filters)
        serializer = serializers.SensorSerializer(queryset, many=True)
        return Response(serializer.data)
    