from django import forms

class CSVForm(forms.Form):
    file = forms.FileField(label='Escolha o arquivo CSV')
    