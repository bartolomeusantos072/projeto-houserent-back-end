FROM node:ubuntu

WORKDIR /usr/app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 5000

CMD nmp start