const Sequelize = require('sequelize');
const Blog = require('../models/Blog.sequelize');

module.exports = {

    async findAll() {
        return await Blog.findAll()
    },
    async findById() {
        return await Blog.findByPk(Number(id))
    }
}