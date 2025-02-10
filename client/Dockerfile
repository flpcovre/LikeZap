# 1️⃣ Imagem base
FROM node:18-alpine AS base
WORKDIR /app

# 2️⃣ Copia apenas arquivos essenciais para instalar dependências
COPY package.json package-lock.json ./

# 3️⃣ Instala dependências sem cache para otimizar camadas
RUN npm ci

# 4️⃣ Copia todo o projeto
COPY . .

# 5️⃣ Ambiente de Desenvolvimento
FROM base AS development
ENV NODE_ENV=development

# Exposição da porta
EXPOSE 3000

# Comando padrão para rodar em modo dev
CMD ["npm", "run", "dev"]

# 6️⃣ Ambiente de Produção
FROM base AS production
ENV NODE_ENV=production

# Compila o projeto para produção
RUN npm run build

# Instala apenas dependências de produção
RUN npm ci --only=production

# Exposição da porta
EXPOSE 3000

# Comando para rodar o Nuxt em produção
CMD ["node", ".output/server/index.mjs"]

# RUN TO PRODUCTION $ NODE_ENV=production docker-compose up --build