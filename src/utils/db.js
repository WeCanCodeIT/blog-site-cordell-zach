const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('localhost', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;