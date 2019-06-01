FROM node:10.16.0-slim

COPY . .
RUN npm install
EXPOSE 5432
CMD [ "node", "app.js" ]

