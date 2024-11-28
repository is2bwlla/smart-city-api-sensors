from django.db import models

'''
    O models.py é o que define a minha tabela no banco de dados, os campos que vãao ter e respectivamente o que esses campos esperam.

    ex: tipo = models.CharField(max_lenght=50, choices=SENSOR_CHOICES)
    - Aqui eu to definindo que meu campo tipo recebe um CharField, é como se eu definisse ele como uma string, essa string
    recebe até no máximo 50 caracteres e deve ser uma das escolhas que meu SENSOR_CHOICES oferece
'''

class Sensor(models.Model):
    SENSOR_CHOICES = [
        ('Temperatura', 'Temperatura'),                 
        ('Umidade', 'Umidade'),                       
        ('Contador', 'Contador'),                         
        ('Luminosidade', 'Luminosidade'),                   
    ]
    
    tipo = models.CharField(max_length=50, choices=SENSOR_CHOICES)
    mac_address = models.CharField(max_length=20, null=True)      
    latitude = models.FloatField()
    longitude = models.FloatField()
    localizacao = models.CharField(max_length=100)         
    responsavel = models.CharField(max_length=100)      
    unidade_medida = models.CharField(max_length=20, blank=True, null=True) 
    status_operacional = models.BooleanField(default=True)                          
    observacao = models.TextField(blank=True)
    
    def __str__(self):
        return f'{self.tipo} - {self.localizacao}'
    
# Tabela para armazenar os dados de temperatura
class TemperaturaData(models.Model):
    sensor = models.ForeignKey(Sensor, on_delete=models.CASCADE)
    valor = models.FloatField() #Valor da temperatura em graus celsius
    timestamp = models.DateTimeField(auto_now_add=True)
    
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
    timestamp = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f'Luminosidade: {self.valor} Lux - {self.timestamp}'
    
    
