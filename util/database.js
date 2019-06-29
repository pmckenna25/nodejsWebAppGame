const config = require('../config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    config.mysql_db,
    config.mysql_user,
    config.mysql_password,
    {
        dialect: config.dialect, 
        host: config.db_host
    }
);

module.exports = sequelize;
