var express = require('express');
var router = express.Router();

function makeCode() {
  var code = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
  for (var i = 0; i < 5; i++)
      code += possible.charAt(Math.floor(Math.random() * possible.length));
}

/* GET users listing. */

router.get('/create', function(req, res, next) {
  res.send(code);
});

module.exports = router;
