var express = require('express');
var router = express.Router();
const GenreController = require('../controllers/genre-controller');

// GET all genres
router.get('/genre', function(req, res, next) {
    res.render('genre', { genre });
});

module.exports = router