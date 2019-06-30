const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const config = require('./config');

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

sequelize
  .sync()
  .then(() => {
    if (!module.parent) {
      app.listen(config.appPort || 8080);
    }
  })
  .catch(err => {
    // eslint-disable-next-line no-console
    console.log(err);
  });

module.exports = app;
