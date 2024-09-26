from django.shortcuts import render
from django.http import HttpResponse

def open_index(request):
    message = 'Open index...'
    return HttpResponse(message)
