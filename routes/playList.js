var express = require('express');
var fs = require('fs');
var { render } = require('../app');
var router = express.Router();

router.get('/:id', function(req, res) {
    const findCode = req.params.id;
    console.log('hello~');
    res.render('play.ejs', {id : findCode});
  });

module.exports = router;
  