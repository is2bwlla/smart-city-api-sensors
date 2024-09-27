import django_filters
from app_smart.models import Sensor

class SensorFilter(django_filters.FilterSet):
    responsible = django_filters.CharFilter(field_name='responsible', lookup_expr='icontains')
    operational_status = django_filters.CharFilter(field_name='operational_status', lookup_expr='exact')
    type = django_filters.CharFilter(field_name='type', lookup_expr='exact')
    location = django_filters.CharFilter(field_name='location', lookup_expr='icontains')
    
    class Meta:
        model = Sensor
        fields = ['operational_status', 'type', 'location', 'responsible']
        
    