const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Character = sequelize.define('character', {

  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  classType: {
    type: Sequelize.STRING,
    allowNull: false
  },
  level: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Character;
