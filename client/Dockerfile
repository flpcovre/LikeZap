# 1️⃣ Imagem base
FROM node:18-alpine AS base
WORKDIR /app

# Instala pnpm globalmente
RUN corepack enable && corepack prepare pnpm@latest --activate

# 2️⃣ Copia apenas arquivos essenciais para instalar dependências
COPY package.json pnpm-lock.yaml ./

# 3️⃣ Instala dependências sem cache para otimizar camadas
RUN pnpm install --frozen-lockfile

# 4️⃣ Copia todo o projeto
COPY . .

# 5️⃣ Ambiente de Desenvolvimento
FROM base AS local
ENV NODE_ENV=local

# Exposição da porta
EXPOSE 3000

# Comando padrão para rodar em modo dev
CMD ["pnpm", "run", "dev"]

# 6️⃣ Ambiente de Produção
FROM base AS production
ENV NODE_ENV=production

# Compila o projeto para produção
RUN pnpm run build

# Exposição da porta
EXPOSE 3000

# Comando para rodar o Nuxt em produção
CMD ["sh", "-c", "pnpm run build && node .output/server/index.mjs"]