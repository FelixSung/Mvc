var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var session = require('express-session');
// init NodeSession
var NodeSession = require('node-session');
var session = new NodeSession({secret: 'Q3UBzdH9GEfiRCTKbi5MTPyChpzXLsTD'});


//define routes
var routes = require('./routes/index');
//var users = require('./routes/users');
var login = require('./routes/login');
//define user routes
var profile = require('./routes/user/profile');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
app.set('partials',{footer:'footer'});

//start session
app.use(function(req,res,next){
  session.startSession(req, res, next);
});
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
//var fs = require('fs');
//path.join(__dirname)
//var logStream = fs.createWriteStream('./log.txt');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(session({
//  secret: 'secret',
//  cookie:{
//    maxAge: 1000*60*30
//  }
//}));


app.use('/', routes);
app.use('/login', login);
app.use('/user',function(req,res,next){
  var user = req.session.get('user');
  if(!user){
    res.redirect("/login");
  }else{
    //记录日志
    var fs = require('fs');
    var date = new Date();
    var path = __dirname + '/logs/' + date.getHours().toString() + (date.getMonth()+1).toString() + date.getDate().toString() + '.txt';
    var content = date.toLocaleString() + ":[UerName]" + user.userName + "\t[URL]" + req.originalUrl + "\n";
    fs.appendFile(path,content)
  }
  next();
});
app.use('/user', profile);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
