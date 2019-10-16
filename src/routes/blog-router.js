var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/blogs', function(req, res, next) {
  res.render('src/views/all.hbs', { title: 'Blogs' });
});

module.exports = router;
