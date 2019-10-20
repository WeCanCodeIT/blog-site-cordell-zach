const Sequelize = require('sequelize');
const Genre = require('../models/Genre.sequelize');
const Blog = require('../models/Blog.sequelize');

module.exports = {

    async findAll() {
        return await Genre.findAll();
    },
    async findById() {
        return await Genre.findByPk(Number(id));
    },
    async addGenre(genre) {
        const newGenre = await Genre.create(genre);

    }
}