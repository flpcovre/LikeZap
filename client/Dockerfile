# Etapa de desenvolvimento
FROM node:18 AS dev

# Diretório de trabalho
WORKDIR /app

# Instalar dependências
COPY package*.json ./
RUN npm install

# Copiar o código-fonte para o container
COPY . .

# Expor a porta do servidor Vue
EXPOSE 5173

# Comando para rodar o servidor Vue no modo desenvolvimento
CMD ["npm", "run", "dev"]

######################################################################

# Etapa 1: Build da aplicação
FROM node:18 AS build

# Definir diretório de trabalho no container
WORKDIR /app

# Copiar os arquivos package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todo o código-fonte para o container
COPY . .

# Build do projeto para produção
RUN npm run build

# Etapa 2: Servir a aplicação
FROM nginx:alpine

# Copiar os arquivos de build para o diretório padrão do nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expor a porta padrão do nginx
EXPOSE 80

# Comando para iniciar o servidor nginx
CMD ["nginx", "-g", "daemon off;"]