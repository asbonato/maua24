#alpine, imagem Linux pequena
FROM node:alpine

#diretório do contêiner
WORKDIR /app

#cópia dos package.jason
COPY package.json .

#instala dependências
RUN npm install

#copia tudo
COPY . .

#executa o node
CMD ["npm", "start"]