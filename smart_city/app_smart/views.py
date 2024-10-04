from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import status, viewsets
from rest_framework.response import Response
from dateutil import parser
from rest_framework.parsers import MultiPartParser, FormParser
import pandas as pd
import csv
from .forms import CSVForm
from .models import Sensor, TemperaturaData
from django.db import IntegrityError
import logging

logger = logging.getLogger(__name__)

class UploadCSVViewSet(viewsets.ViewSet):
    parser_classes = (MultiPartParser, FormParser)
    
    REQUIRED_COLUMNS = ['tipo', 'unidade_medida', 'latitude', 'longitude', 'localizacao', 'responsavel', 'status_operacional', 'observacao', 'mac_address']

    def create(self, request):
        form = CSVForm(request.POST, request.FILES)
        
        if form.is_valid():
            csv_file = request.FILES['file']
            
            if not csv_file.name.endswith('.csv'):
                logger.error(f"Form errors: {form.errors}")
                return Response({'error': 'Este não é um arquivo CSV válido.'}, status=status.HTTP_400_BAD_REQUEST)
            
            try:
                file_data = csv_file.read().decode('utf-8').splitlines()
                reader = csv.DictReader(file_data, delimiter=',')
                
                csv_columns = reader.fieldnames
                missing_columns = [col for col in self.REQUIRED_COLUMNS if col not in csv_columns]
                if missing_columns:
                    logger.error(f"Colunas faltando no CSV: {missing_columns}")
                    return Response({'error': f"Colunas faltando no CSV: {', '.join(missing_columns)}"}, status=status.HTTP_400_BAD_REQUEST)
                
                for row in reader:
                    try:
                        mac_address = row['mac_address'].strip() if 'mac_address' in row and row['mac_address'].strip() != '' else None
                        
                        Sensor.objects.create(
                            tipo=row['tipo'],
                            unidade_medida=row['unidade_medida'] if row['unidade_medida'] else None,
                            latitude=float(row['latitude'].replace(',', '.')),
                            longitude=float(row['longitude'].replace(',', '.')),
                            localizacao=row['localizacao'],
                            responsavel=row['responsavel'] if row['responsavel'] else '',
                            status_operacional=True if row['status_operacional'] == 'True' else False,
                            observacao=row['observacao'] if row['observacao'] else '',
                            mac_address=mac_address
                        )
                    except (ValueError, IntegrityError) as e:
                        logger.error(f"Erro ao processar a linha do CSV: {e}")
                        return Response({'error': f"Erro ao processar o CSV: {str(e)}"}, status=status.HTTP_400_BAD_REQUEST)
                
                return Response({'message': 'CSV processado com sucesso!'}, status=status.HTTP_201_CREATED)
            
            except Exception as e:
                logger.error(f"Erro geral no processamento do CSV: {e}")
                return Response({'error': 'Erro ao processar o arquivo CSV.'}, status=status.HTTP_400_BAD_REQUEST)
                
        else:
            logger.error(f"Erros no formulário: {form.errors}")
            return Response(form.errors, status=status.HTTP_400_BAD_REQUEST)

def open_index(request):
    message = 'Open index...'
    return HttpResponse(message)

def upload_view(request):
    return render(request, 'csv.html')
