FROM node:21.7.2
ARG NODE_ENV=prod 
ENV NODE_ENV=${NODE_ENV} 
WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build