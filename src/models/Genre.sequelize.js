const Sequelize = require('sequelize');
const sequelize = require('../utils/db');

const Genre = sequelize.define('genre', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    genreType: {
        type: Sequelize.STRING,
        default: "no string value"
    }
});

// O.R.M.
// Genre.hasMany(Blog)
// Blog.belongsTo(Genre);

module.exports = Genre