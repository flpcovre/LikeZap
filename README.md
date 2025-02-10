# LikeZap - WhatsApp Customer Service

## About

Aplicação Web sendo Desenvolvida com Nuxt.js e Laravel para trabalho de TCC do autor Filipe Feitosa Covre.

Consiste em uma interface onde o usuário do sistema tem a capacidade de conversar com os clientes que estão enviando mensagens no WhatsApp, isso por meio da Api do WhatsApp.

## Installation

```
cd likezap
```

Crie o Arquivo .env na raiz a partir do .env.example

```
cp .env.example .env
```

Crie o Arquivo .env na API

```
cd api
```
```
cp .env.example .env
```

Monte o Container
```
docker compose up -d
```

Acesse o Terminal do Container da API
```
docker compose exec api bash
```

Resolva as Dependências do Laravel
```
composer install
```

Gere uma Key e Migre as tabelas do banco de dados mysql.
```
php artisan key:generate
```
```
php artisan migrate
```