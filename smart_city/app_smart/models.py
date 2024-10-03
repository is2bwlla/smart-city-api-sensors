from django.db import models

# Tabela para armazenar os dados dos sensores no geral
class Sensor(models.Model):
    SENSOR_CHOICES = [
        ('Temperatura', 'Temperatura'),                 # Temperatura
        ('Umidade', 'Umidade'),                       # Umidade
        ('Contador', 'Contador'),                         # Contador
        ('Luminosidade', 'Luminosidade'),                   # Luminosidade
    ]
    
    tipo = models.CharField(max_length=50, choices=SENSOR_CHOICES)
    unidade_medida = models.CharField(max_length=20, blank=True, null=True)       # Unidade_medida
    latitude = models.FloatField()
    longitude = models.FloatField()
    localizacao = models.CharField(max_length=100)         # Localização
    responsavel = models.CharField(max_length=100)      # Responsável
    status_operacional = models.BooleanField(default=True)                          # Status_operacional
    observacao = models.TextField(blank=True)
    mac_address = models.CharField(max_length=20, null=True)
    
    def __str__(self):
        return f'{self.tipo} - {self.localizacao}'
    
# Tabela para armazenar os dados de temperatura
class TemperaturaData(models.Model):
    sensor = models.ForeignKey(Sensor, on_delete=models.CASCADE)
    valor = models.FloatField() #Valor da temperatura em graus celsius
    timestamp = models.DateTimeField()
    #timestamp = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f'Temperatura: {self.valor} °C - {self.timestamp}'
    
# Tabela para armazenar os dados de umidade
class UmidadeData(models.Model):
    sensor = models.ForeignKey(Sensor, on_delete=models.CASCADE)
    valor = models.FloatField() #Valor da umidade relativa em %
    timestamp = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f'Umidade: {self.valor}% - {self.timestamp}'
    
# Tabela para armazenar os dados do contador
class ContadorData(models.Model):
    sensor = models.ForeignKey(Sensor, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f'Contagem: {self.timestamp}'
    
# Tabela para armazenar os dados de luminosidade
class LuminosidadeData(models.Model):
    sensor = models.ForeignKey(Sensor, on_delete=models.CASCADE)
    valor = models.FloatField() #Valor da luminosidade em Lux
    timestamp = models.DateTimeField()
    #timestamp = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f'Luminosidade: {self.valor} Lux - {self.timestamp}'
    
    