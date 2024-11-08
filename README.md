# PROJETO INTEGRADOR: Smart_city

## API em Django + Front em React (vou fazer após terminar a documentação.)

## PASTAS:

Pasta: **smart_city**
    A pasta smart_city contém as configurações principais e a estrutura do projeto Django.


Conteúdo:
    **app_smart/**:
        Contém os aplicativos principais da aplicação.


**pycache/**:
    Diretório gerado automaticamente que armazena os arquivos .pyc compilados para otimização de desempenho.


**admin.py**:
    Configura o painel de administração do Django, permitindo a manipulação dos dados diretamente pelo painel do administrador.


**apps.py**:
    Configurações específicas do aplicativo, incluindo nome e configurações iniciais.


**forms.py**:
    Define os formulários utilizados na aplicação, facilitando a manipulação de dados inseridos pelos usuários.


**models.py**:
    Define os modelos de dados da aplicação, representando as tabelas do banco de dados.


**tests.py**:
    Contém testes automatizados para garantir que as funcionalidades da aplicação funcionam como esperado.


**urls.py**:
Define as rotas da aplicação e mapeia as URLs para as respectivas views.


**views.py**:
    Contém as views que controlam a lógica de apresentação, processando requisições e retornando respostas adequadas.


**api/**:
    Contém os componentes da API da aplicação.


**pycache/**:
    Diretório gerado automaticamente que armazena os arquivos .pyc compilados.


**filters.py**:
    Define filtros utilizados nas queries da API, permitindo a personalização das requisições.


**serializers.py**:
    Responsável por converter instâncias de modelos para formatos como JSON e vice-versa.


**viewsets.py**:
    Contém os viewsets que combinam lógicas de visualização e manipulação de dados em um único componente.


**migrations/**:
    Contém os arquivos de migração do banco de dados, registrando as alterações no esquema.


**pycache/**:
    Diretório gerado automaticamente que armazena os arquivos .pyc compilados.


**init.py**:
    Torna a pasta uma biblioteca Python.


**0001_initial.py**:
    Define a primeira migração do banco de dados, criando as tabelas iniciais conforme os modelos.


Demais arquivos de migração (0002*\*, 0003*\*, etc.):
    Cada arquivo representa uma alteração no esquema do banco de dados, como adição, remoção ou modificação de tabelas e campos.


**templates/**:
    Contém os templates HTML utilizados pela aplicação.


**csv.html**:
    Template para renderizar dados em formato CSV.


**index.html**:
    Página inicial da aplicação.


**init.py**:
    Torna a pasta uma biblioteca Python.


**dados/**:
    Pasta que contém dados utilizados pela aplicação.


**contador_data.csv**:
    Arquivo CSV que armazena dados que podem ser utilizados para populamento do banco de dados ou para análise.


-- PRECISA FAZER:
    . subir dados manualmente nas tabelas (CRUD)
    . Subir o back no pythonanywhere (estudar)
    . Subir o front no vercel/netlify (estudar)