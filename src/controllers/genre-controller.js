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
    static async renderSingle (req, res) {
        const genre = await genreService.findById(req.params.id);
        genre.body = await genre.getBody();
        res.render("/genre", { genre });
    }
}

module.exports = GenreController