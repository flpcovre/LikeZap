FROM node:23-slim
WORKDIR /app

# Instala pnpm globalmente
RUN corepack enable && corepack prepare pnpm@latest --activate

# 2️⃣ Copia apenas arquivos essenciais para instalar dependências
COPY package.json pnpm-lock.yaml ./

# 3️⃣ Instala dependências sem cache para otimizar camadas
RUN pnpm install --frozen-lockfile

# 4️⃣ Copia todo o projeto
COPY . .

# Exposição da porta
EXPOSE 3333

# Comando padrão para rodar em modo dev
CMD ["node", "server.js"]