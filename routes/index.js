var express = require('express');
var fs = require('fs');
const { render } = require('../app');
var router = express.Router();

var main_title = 'Playus';

function makeCode() {
  var code = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for( var i=0; i < 5; i++ )
      code += possible.charAt(Math.floor(Math.random() * possible.length));

  return code;
}

router.post('/make', function(req, res, next) {
  var code = makeCode();
  fs.writeFile('./data/' + code,' ', function(err) {
      if (err) {
        console.log(err);
        res.status(500).send('F-Error');
      }
      res.redirect('/' + code);
  });
});

router.get(['/', '/:id'], function(req, res) {
  const id = req.params.id;
  fs.readdir('./data', function(err, files) {
    if (err) {
      console.log(err);
      res.send("Error");
    }
    if (id) {
      fs.readFile('./data/' + id, 'utf-8', function(err, data) {
        if (err) {
          console.log(err);
          res.status(500);
        }
        res.render('index.ejs', {code_list:files, title:main_title});
      })
    }
    else {
      res.render('index.ejs', {code_list:files, title:main_title});
    }
  })
})

router.get('/search/:id', function(req, res) {
  const findCode = req.params.id;
  fs.stat('./data/' + findCode, function (err, stat) {
    if (err == null) {
      res.redirect('/playList/' + findCode);
    }
    else {
      console.log(err);
      res.status(500).send('File is not existed');
    }
  });
});


module.exports = router;
