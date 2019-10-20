var express = require('express');
var router = express.Router();
const BlogController = require('../controllers/blog-controller');

/* GET all blogs page. */
router.get('/all', BlogController.renderAll);


router.get('/single', function(req, res, next) {
  res.render('blogs/single', {single});
});

module.exports = router;