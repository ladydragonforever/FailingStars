FROM node:12-alpine

RUN npm -g install static-server
EXPOSE 80

WORKDIR /srv

ADD package.json package-lock.json ./

RUN npm install

ADD ./ ./

RUN npm run build

ENTRYPOINT static-server --port=80
