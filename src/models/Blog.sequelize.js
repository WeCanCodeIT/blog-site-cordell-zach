const Sequelize = require('sequelize');
const sequelize = require('../utils/db');
const Blog = sequelize.define('blog', {

id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
},
    
author: {
  type: Sequelize.STRING,
  allowNull: false
},

title: {
  type: Sequelize.STRING,
  allowNull: false
},

body: {
type: Sequelize.STRING,
allowNull: false
},

genre: {
type: Sequelize.STRING,
allowNull: false

},

publishDate: {
type: Sequelize.STRING,
allowNull: false

},

tags: {
type: Sequelize.STRING,  
allowNull: false
      
}})
module.exports = Blog;