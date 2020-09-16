var createError   = require('http-errors');
var express       = require('express');
var path          = require('path');
var cookieParser  = require('cookie-parser');
var logger        = require('morgan');
var indexRouter   = require('./routes/index');
var playRouter    = require('./routes/playList');
var mysql         = require('mysql');
var dbconfig      = require('./config/database');
var connection    = mysql.createConnection(dbconfig);

var app           = express();

connection.connect();

// view engine setup
app.set('views', path.join(__dirname +  '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname + '../public')));

app.use('/', indexRouter);
app.use('/playList', playRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


var sql = 'SELECT * FROM GUGJS';
connection.query(sql, function(err, rows, fields){//row는 '행'이라는 뜻이다.
  if(err){
      console.log(err);
  } else {
      for(var i = 0; i < rows.length; i++){
        console.log(rows[i].COUNT + " : " + rows[i].YOUTUBE_URL);
      }
  }
});

connection.end();


module.exports = app;
