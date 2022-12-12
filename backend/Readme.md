### Backend 

Backend desenvolvido para criar encomendas e gera-las

#### Instalação e Configuração
instalar dependencias
```py
    pip install -r requirements.txt 
``` 

Crie um arquivo `.env` dentro da pasta **backend** e adicione a coneção do seu banco de dados na variavel 
```
    DOT_ENV_CONNECTION=SuaConneção
```

Rodar o backend
```
    uvicorn main:app --reload
```

#### Desenvolvido 

* O backend foi desenvolvido em `python` com framework `FastApi` 
* banco de dados `MySql` 
* Orm `SqlAlchemy` 

#### Rotas 

* Post `/encomendas` 
Essa rota é responsavel por criar novas encomendas de produtos 
* Get `/encomendas`
Essa rota é resposavel por listar todas as encomendas 
* Get `/encomendas/user_id`
Essa rota pega todas as encomentas por usuario