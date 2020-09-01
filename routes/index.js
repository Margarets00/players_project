var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');

router.get('/', function(request, response) { 
    var title = 'Players';
    var description = 'Please Write Code';
    var list = template.list(request.list);
    var html = template.HTML(title, list,
      `
      <h2>${title}</h2>
      ${description}
      <p><input type="text" name="code"></p>
      <p><input type="submit"></p>
      `,
      `<a href="/topic/create">create</a>`
    ); 
    response.send(html);
  });
  module.exports = router;