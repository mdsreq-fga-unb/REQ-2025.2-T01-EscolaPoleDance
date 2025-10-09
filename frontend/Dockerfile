FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Faz o build do React
RUN npm run build

# Expõe a porta
EXPOSE 3000

# Roda o servidor Node (Express)
CMD ["node", "server.js"]
