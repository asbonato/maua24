#comentários são feitos com #
#desde que # seja o primeiro símbolo da linha
#essa linguagem não é case sensitive
#mas é boa prática usar maiúsculas para diferenciar comandos de argumentos

#queremos uma imagem com o node versão 14
FROM node:14

#um diretório no sistema de arquivos do contêiner para os comandos a seguir
WORKDIR /app

#copiamos o package.jso para poder executar o npm install
COPY package.json .

#executamos npm install
RUN npm install

#copiamos os demais arquivos
COPY . .

#tornamos o contêiner disponível na porta 5200
EXPOSE 5200

#colocamos o aplicativo em execução
CMD ["node", "index.js"]