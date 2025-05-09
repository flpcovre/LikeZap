#!/bin/bash

[ ! -f ".env" ] && cp .env.example .env

# Instala dependências do Laravel se ainda não estiverem instaladas
if [ ! -d "vendor" ]; then
  composer install
fi

# Gera a APP_KEY se ainda não existir
if ! php artisan key:generate --show &> /dev/null; then
  php artisan key:generate
fi

# Executa as migrações
php artisan migrate --force

# Executa o comando padrão
exec "$@"
