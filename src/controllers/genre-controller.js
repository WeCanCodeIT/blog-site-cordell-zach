const genreService = require('../services/genre-service');
const genre = require('../models/Genre');
const blogService = require('../services/blog-service');

class GenreController {
    static async addGenre (req, res) {
    const genreType = req.body.genreType;

    await genreService.addGenre(new Genre(genreType));
        res.redirect('/genres');
    }
    static async renderAll (req, res) {
        res.render('/genre', { genre: await genreService.findAll() });
    }
}

module.exports = GenreController