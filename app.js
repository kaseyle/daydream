
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
var yogicBreathing = require('./routes/yogicBreathing');
var nap = require('./routes/nap');
var massage = require('./routes/massage');
var stars = require('./routes/stars');
var cook = require('./routes/cook');

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
app.get('/breathing', breathing.view);
app.get('/zumba', zumba.view);
app.get('/yogicBreathing', yogicBreathing.view);
app.get('/nap', nap.view);
app.get('/massage', massage.view);
app.get('/stars', stars.view);
app.get('/cook', cook.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
