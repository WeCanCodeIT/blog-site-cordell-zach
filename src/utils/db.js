const Sequelize = require('sequelize');

const sequelize = new Sequelize('blog-platform', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;