FROM node:18-alpine
WORKDIR /faucet
COPY package.json .
COPY app.js .
RUN npm install
CMD ["node", "app.js"]
