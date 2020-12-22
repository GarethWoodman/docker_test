var express = require('express');
var router = express.Router();
var fetch = require('cross-fetch');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const url = "http://api:7000"
  const response = await fetch(url)
  var data = await response.json()
  res.render('index', { title: 'Express', people: data});
});

module.exports = router;
