FROM node:latest

WORKDIR /app

COPY . /app

RUN npm install

RUN [ "npm", "run", "lint", "&&", "npm", "run", "build" ]