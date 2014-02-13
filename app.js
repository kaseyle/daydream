
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var data = require('./routes/data');
var index = require('./routes/index');
var cloud = require('./routes/cloud');
var clock = require('./routes/clock');
var yoga = require('./routes/yoga');
var cloudGazing = require('./routes/cloudGazing');
var reflect_day = require('./routes/reflect_day');
var meditate = require('./routes/meditate');
var quotes = require('./routes/quotes');
var places = require('./routes/places');
var zumba = require('./routes/zumba');
var breathing = require('./routes/breathing');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/clock', clock.view);
app.get('/cloud', cloud.view);
app.get('/yoga', yoga.view);
app.get('/cloudGazing', cloudGazing.view);
app.get('/reflect_day', reflect_day.view);
app.get('/data', data.getJson);
app.get('/meditate', meditate.view);
app.get('/quotes', quotes.view);
app.get('/places', places.view);
<<<<<<< HEAD
app.get('/zumba', zumba.view);
=======
app.get('/breathing', breathing.view);
>>>>>>> e57b7a4d4ec87dc5f029640bc57fb7ec85ab0d46
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
