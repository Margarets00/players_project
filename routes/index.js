var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  /*
  function listCode() {
    var i = 1;
    var code = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    
    for (var i = 0; i < 5; i++)
        code += possible.charAt(Math.floor(Math.random() * possible.length));
    code = "<li id = code" + i + ">" + code + "</li>"
    i++;
    console.log(code);
    $("code_list").append(code);
  }
*/
  res.render('index.html');
});

module.exports = router;
