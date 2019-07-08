const path = require('path');
const http = require('http');
const bodyparser = require('body-parser');
const { createTerminus, HealthCheckError } = require('@godaddy/terminus');
const config = require('./config');
const tracer = require('dd-trace').init({
  hostname: 'http://172.17.0.5',
  port: 8126,
  env: config.nodeEnv,
  logInjection: true,
  analytics: true,
});

const { createLogger, format, transports } = require('winston');
const addAppNameFormat = format(info => {
  info.ddtags = { 'logging-mvp': 'dd-tracing-logging-rolepaying' };
  return info;
});

const logger = createLogger({
  level: 'info',
  exitOnError: false,
  format: format.combine(
    addAppNameFormat(),
    format.json(),
  ),
  transports: [
    new transports.Console(),
  ],
});

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
app.use(welcomeRouter);

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

module.exports = { app, logger };
