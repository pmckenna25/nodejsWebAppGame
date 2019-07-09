const path = require('path');
const http = require('http');
const bodyparser = require('body-parser');
const logger = require('./logger');
const { createTerminus, HealthCheckError } = require('@godaddy/terminus');
const config = require('./config');
require('dd-trace').init({ logger })
const expressWinston = require('express-winston');

const express = require('express');
const { configReady } = require('./terminus');

const characterRoutes = require('./routes/characterRoutes');
const welcomeRouter = require('./routes/welcome-page');
const sequelize = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(characterRoutes);
app.use(expressWinston.logger({
  winstonInstance: logger
}))

app.use(welcomeRouter);

app.use(expressWinston.logger({
  winstonInstance: logger
}))
const server = http.createServer(app);

sequelize
  .sync()
  .then(() => {
    if (!module.parent) {
      server.listen(config.appPort || 8080);
    }
  })
  .catch(err => {
    // eslint-disable-next-line no-console
    console.log(err);
  });

createTerminus(server, {
  healthChecks: {
    '/live': () => Promise.resolve(),
    '/ready': async () => {
      const configReadiness = configReady(config);
      return configReadiness.length === 0
        ? Promise.resolve()
        : Promise.reject(
          new HealthCheckError('Application not ready', configReadiness),
        );
    },
  },
});

module.exports = { app };
