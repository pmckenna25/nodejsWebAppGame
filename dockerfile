FROM node:11.11.0-slim

LABEL maintainer=managedcontent-dev@bazaarvoice.com
LABEL description="Managed Content API"

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /opt/mc-api
COPY package.json package-lock.json ./

RUN npm ci

COPY . .

EXPOSE 8080
CMD node app.js
