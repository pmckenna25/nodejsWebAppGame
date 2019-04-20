const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'Roleplaying',
    'admin',
    'Letmein20',
    {
        dialect: 'mysql', 
        host: 'mysqldb.c2brgmesgzpg.eu-west-2.rds.amazonaws.com'
    }
);

module.exports = sequelize;