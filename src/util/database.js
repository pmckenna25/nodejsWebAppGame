const Sequelize = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(
  config.mysql_db,
  config.mysql_user,
  config.mysql_password,
  {
    dialect: 'mysql',
    host: config.db_host,
  },
);

module.exports = sequelize;
