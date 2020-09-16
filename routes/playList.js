var express = require('express');
var fs = require('fs');
const { render } = require('../app');
var router = express.Router();

router.get('/:id', function(req, res) {
    const findCode = req.params.id;
    console.log('hello~');
    res.render('./views/playList.ejs', {id : findCode});
  });

module.exports = router;
  