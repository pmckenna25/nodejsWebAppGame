FROM node:11.11.0-alpine

LABEL maintainer=managedcontent-dev@bazaarvoice.com
LABEL description="Managed Content API"

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /src/
COPY package.json package-lock.json ./

RUN npm ci --production

COPY src/ src/

EXPOSE 8080

CMD node src/app.js
