const { render } = require('../server');

var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res) {
    const findCode = req.params.id;
    res.render('play.ejs', {id : findCode});
  });

module.exports = router;
