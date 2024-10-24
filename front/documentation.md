##INSTRUÇÕES DO MEU FRONT EM REACT:

## Sumário:
    1. Diretório React;
    2. Arquivos na raiz do projeto;
    3. Pastas na raiz do projeto;
    
-- Eu organizei em pastas para ficar mais fácil de me encontrar na minha organização:
    1. **assests**: é a pasta onde eu guardo recursos estáticos, por exemplo, imagens;
    2. **components**: é a pasta onde eu guardo meus componentes;
    3. **config**: é a pasta onde eu guardo as configurações do projeto;
    4. **pages**: é a pasta onde eu guardo as páginas do meu projeto;
    5. **styles**: é a pasta onde eu guardo os arquivos .css do meu projeto, minhas estilizações;
    6. **tests**: é a pasta onde eu guardo meus arquivos de testes unitários

### Essas pastas não são obrigatórias e nem vem por padrão na inicialização de um projeto em react, eu criei elas manualmente porque eu sinto que para mim, o projeto fica mais organizado e mais fácil de se encontrar quando os conteúdos são separados por categorias. 

## App.js:
    - O 'App.js' é o arquivo principal do meu projeto, é nele que eu vou importar meus componentes e as minhas páginas, é como se ele fosse o fio que conecta toda a minha aplicação.

    ###LINHA 01: eu importei o 'React' de 'react', ele traz um pacote que é uma biblioteca central para criar interfaces de usuário.

    ###LINHA 05 A 11: o React por conveniência dos templates como 'create-react-app' cria o arquivo 'App.js' e nele vem uma função chamada 'App()', é uma função que retorna seus componentes e suas páginas, essa função é renderizada quando a aplicação é inicializada, normalmente pelo arquivo 'index.js'.

        A <div className="App"> é como um container que engloba tudo o que você chama ali dentro, essa div recebe uma className="App" que é uma classe css de estilização.

    ###LINHA 13: o 'export default Header' indica que você está exportando um componente único que pode ser importado por outros arquivos do meu projeto.

## index.js:
    - O 'index.js' é o arquivo que inicializa a aplicação, é ele quem renderiza o DOM.

    ###LINHA 01 A 05: é importado o 'React' de 'react', ele traz um pacote que é uma biblioteca central para criar interfaces de usuário;

        é importado 'ReactDOM' de 'react-dom/client' é uma biblioteca específica para manipular o DOM na aplicação React;

        é importado './styles/index.css' que é a estilização do meu 'index.js';

        é importado 'App' de './App' para trazer o conteúdo principal da minha interface;

        é importado 'reportWebVitals' de './config/reportWebVitals' para edir e relatar métricas de desempenho da aplicação;

    ### LINHA 07 A 12: tem uma const 'root' que é onde minha aplicação será montada, depois eu declaro um 'root.render' que será repsonsável por renderizar a minha aplicação, dentro dele eu vou colocar o 'React.StrictMode' que ativa verificações adicionais e alertas para seus componentes, ajudando a identificar problemas potenciais no código, dentro dele eu coloco o '<App/>' que será renderizado.

    ###LINHA 13: é chamada a função 'reportWebVitals()' que começará a coletar métricas de desempenho e pode enviar esses dados para um serviço de monitoramento ou registrá-los no console (somente se você tiver configurado seu reportWebVitals).

## COMPONENTES:

-- header.js:
    ###LINHA 01: eu importei o React de 'react', ele traz um pacote que é uma biblioteca central para criar interfaces de usuário.

    ###LINHA 03 A 17: eu criei um constante (const) chamada Header, ela armazena uma arrow function, dentro dessa função eu abro a tag <header> e nela eu adiciono as tags HTML necessárias para fazer uma nav, tudo isso da mesma forma como eu faria em um arquivo .html comum.

    ###LINHA 19: o 'export default Header' indica que você está exportando um componente único que pode ser importado por outros arquivos do meu projeto.


# COMANDOS E INSTALAÇÕES:
    1. npx create-react-app@5.0.1 (cria sua pasta do projeto react)
    2. npx create-react-app <nome-do-seu-projeto> (cria o seu projeto)
    3. npm start (starta o front no navegador)

    1. npm install (instala o npm)
    2. npm install react-router-dom (instala a biblioteca react "router" para navegar entre telas)