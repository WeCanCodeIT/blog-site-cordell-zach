var express = require('express');
var router = express.Router();
const BlogController = require('../controllers/blog-controller');

/* GET home page. */
router.get('/blogs', function(req, res, next) {
  res.render('src/views/all', { title: 'All the Blogs!' });
});

module.exports = router;
