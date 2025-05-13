#!/bin/bash

# Espera o banco de dados ficar disponível (apenas local)
if [ "$APP_ENV" = "local" ]; then
  echo "Aguardando o banco de dados em $DB_HOST:$DB_PORT..."
  until nc -z "$DB_HOST" "$DB_PORT"; do
    sleep 2
  done
  echo "Banco de dados está pronto!"
fi

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