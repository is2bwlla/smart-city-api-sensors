from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import status, viewsets
from rest_framework.response import Response
from dateutil import parser
from rest_framework.parsers import MultiPartParser, FormParser
import csv
from .forms import CSVForm
from .models import Sensor, TemperaturaData, UmidadeData, LuminosidadeData, ContadorData

def upload_CSV(request, model_class, expected_fields):
    if request.method == 'POST':
        form = CSVForm(request.POST, request.FILES)

        if form.is_valid():
            csv_file = request.FILES['file']

            if not csv_file.name.endswith('.csv'):
                return render(request, 'csv.html', {'form': form, 'message': 'Este não é um arquivo CSV válido.'})

            file_data = csv_file.read().decode('ISO-8859-1').splitlines()
            reader = csv.DictReader(file_data, delimiter=',')
            success_count = 0  # Contador para o número de registros salvos

            for row in reader:
                model_instance = model_class()

                # Define valores nos campos esperados
                for field in expected_fields:
                    value = row.get(field)
                    # Tenta setar o valor no campo, ignorando erros
                    if value is not None:
                        # Verifica se o valor é numérico para campos que esperam números
                        if field in ['sensor_id']:  # Adicione outros campos que esperam números
                            try:
                                value = float(value)  # Ou int(value) se for um inteiro
                            except ValueError:
                                continue  # Ignora se não for um número
                        model_instance.__setattr__(field, value)

                # Salva a instância sem capturar erros
                try:
                    model_instance.save()
                    success_count += 1
                except Exception:
                    continue  # Ignora qualquer erro ao salvar

            return render(request, 'csv.html', {
                'form': form,
                'message': f'Sucesso: {success_count} registro(s) carregado(s) no banco de dados.'
            })
        else:
            return render(request, 'csv.html', {'form': form, 'message': 'Erro no formulário.'})

    else:
        form = CSVForm()

    return render(request, 'csv.html', {'form': form})


def open_index(request):
    message = 'Open index...'
    return HttpResponse(message)

def upload_temperatura_view(request):
    expected_fields = ['sensor_id', 'valor', 'timestamp']
    return upload_CSV(request, TemperaturaData, expected_fields)

def upload_umidade_view(request):
    expected_fields = ['sensor_id', 'valor', 'timestamp']
    return upload_CSV(request, UmidadeData, expected_fields)

def upload_luminosidade_view(request):
    expected_fields = ['sensor_id', 'valor', 'timestamp']
    return upload_CSV(request, LuminosidadeData, expected_fields)

def upload_contador_view(request):
    expected_fields = ['sensor_id', 'timestamp']

    if request.method == 'POST':
        return upload_CSV(request, ContadorData, expected_fields)
    
    form = CSVForm()
    return render(request, 'csv.html', {'form': form})

def upload_sensores_view(request):
    expected_fields = ['tipo', 'unidade_medida', 'latitude', 'longitude', 'localizacao', 'responsavel', 'status_operacional', 'observacao', 'mac_address']

    if request.method == 'POST':
        return upload_CSV(request, Sensor, expected_fields)
    
    form = CSVForm()
    return render(request, 'csv.html', {'form': form})