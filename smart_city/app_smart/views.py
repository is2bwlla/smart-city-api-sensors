from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
import pandas as pd
import csv
from .forms import CSVForm
from .models import Sensor

class UploadCSVViewSet(viewsets.ViewSet):
    parser_classes = (MultiPartParser, FormParser)

    def create(self, request):
        form = CSVForm(request.POST, request.FILES)
        
        if form.is_valid():
            csv_file = request.FILES['file']
            
            # Verifica se o arquivo tem a extensão correta
            if not csv_file.name.endswith('.csv'):
                return Response({'error': 'Este não é um arquivo CSV válido.'}, status=status.HTTP_400_BAD_REQUEST)
            
            # Processa o arquivo CSV
            file_data = csv_file.read().decode('ISO-8859-1').splitlines()
            reader = csv.DictReader(file_data, delimiter=',')  
            
            for row in reader:
                try:
                    Sensor.objects.create(
                        tipo=row['tipo'],
                        unidade_medida=row['unidade_medida'] if row['unidade_medida'] else None,
                        latitude=float(row['latitude'].replace(',', '.')),
                        longitude=float(row['longitude'].replace(',', '.')),
                        localizacao=row['localizacao'],
                        responsavel=row['responsavel'] if row['responsavel'] else '',
                        status_operacional=True if row['status_operacional'] == 'True' else False,
                        observacao=row['observacao'] if row['observacao'] else '',
                        mac_address=row['mac_address'] if row['mac_address'] else None
                    )
                except KeyError as e:
                    print(f"Chave não encontrada: {e} na linha: {row}")  # Exibe o erro e a linha problemática
            
            return Response({'message': 'CSV processado com sucesso!'}, status=status.HTTP_201_CREATED)

        return Response(form.errors, status=status.HTTP_400_BAD_REQUEST)



def open_index(request):
    message = 'Open index...'
    return HttpResponse(message)

def upload_view(request):
    return render(request, 'upload.html')