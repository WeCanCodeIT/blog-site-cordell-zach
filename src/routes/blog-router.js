var express = require('express');
var router = express.Router();
const BlogController = require('../controllers/blog-controller');

/* GET home page. */
router.get('/all', function(req, res, next) {
  res.render('blogs/all', { title: 'All the Blogs!' });
});

router.get('/single', function(req, res, next) {
  res.render('blogs/single', {single});
});

module.exports = router;