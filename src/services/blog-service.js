// sequelize dis shit

module.exports = {

    async findAll() {
        return await Blog.findAll()
    },
    async findById() {
        return await Blog.findByPk(Number(id))
    }
}