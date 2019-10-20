const Sequelize = require('sequelize');
const sequelize = require('../utils/db');
const Blog = sequelize.define('blog', {

id: {
  type: Sequelize.INTEGER,
  autoIncrement: true,
  allowNull: false,
  primaryKey: true
},
    
author: {
  type: Sequelize.STRING,
  allowNull: false,
  default: "no string value"
},

title: {
  type: Sequelize.STRING,
  // allowNull: false,
  default: "no string value"
},

body: {
  type: Sequelize.STRING,
  // allowNull: false,
  default: "no string value"
},

genre: {
  type: Sequelize.STRING,
  // allowNull: false,
  default: "no string value"
},

publishDate: {
  type: Sequelize.STRING,
  // allowNull: false,
  default: "no string value"
},

tags: {
  type: Sequelize.STRING,  
  // allowNull: false,
  default: "no string value"
}
})

module.exports = Blog;