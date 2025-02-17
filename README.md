# LikeZap - WhatsApp Customer Service

## About

Web Application Being Developed with Nuxt.js and Laravel for Filipe Feitosa Covre's Graduation Project (TCC).

It consists of an interface where the system user can communicate with clients who are sending messages on WhatsApp, using the WhatsApp API.

## Installation

```
cd likezap
```

Create .env file in root from .env.example

```
cp .env.example .env
```

Create the .env File in the API

```
cd api
```
```
cp .env.example .env
```

Assemble the Container
```
docker compose up -d
```

Access the API Container Terminal
```
docker compose exec api bash
```

Resolve Laravel Dependencies
```
composer install
```

Generate a Key and Migrate the mysql database tables.
```
php artisan key:generate
```
```
php artisan migrate
```