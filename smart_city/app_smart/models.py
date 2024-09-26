from django.db import models

class Sensor(models.Model):
    SENSOR_CHOICES = [
        ('Temperature', 'Temperature'),                 # Temperatura
        ('Humidity', 'Humidity'),                       # Umidade
        ('Counter', 'Counter'),                         # Contador
        ('Luminosity', 'Luminosity'),                   # Luminosidade
    ]
    
    type = models.CharField(max_length=50, choices=SENSOR_CHOICES)
    mac_address = models.CharField(max_length=20, null=True)
    latitude = models.FloatField()
    longitude = models.FloatField()
    location = models.CharField(max_length=100)         # Localização
    responsible = models.CharField(max_length=100)      # Responsável
    measurement_unit = models.CharField(max_length=20, blank=True, null=True)       # Unidade_medida
    operational_status = models.BooleanField(default=True)                          # Status_operacional
    observation = models.TextField(blank=True)
    
    def __str__(self):
        return f'{self.type} - {self.location}'
    