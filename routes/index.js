var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/leo.html', function(req, res, next) {
  res.render('index', { title: 'My first page in Express' });
});

module.exports = router;
