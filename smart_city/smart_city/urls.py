from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),                    # Me encaminha para a interface admin padrão do django
    path('', include('app_smart.urls')),                # O '' define o padrão da URL, nesse caso é a raiz do site, o "include" é para direcionar pras urls.py dentro de "app_smart"
]
