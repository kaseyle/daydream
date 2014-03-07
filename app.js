
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
var positiveThinking = require('./routes/positiveThinking');
var stretch = require('./routes/stretch');
var powerstance = require('./routes/powerstance');
var riddle = require('./routes/riddle');
var joke = require('./routes/joke');
var run = require('./routes/run');
var flowers = require('./routes/flowers');
var music = require('./routes/music');
var gum = require('./routes/gum');
var toeTensing = require('./routes/toeTensing');
var guidedImagry = require('./routes/guidedImagry');
var quietEars = require('./routes/quietEars');
var reflect_life = require('./routes/reflect_life');
var draw = require('./routes/draw');
var article = require('./routes/article');
var coffee = require('./routes/coffee');
var walk = require('./routes/walk');
var travel = require('./routes/travel');
var secret = require('./routes/secret');
var puzzle = require('./routes/puzzle');
var call = require('./routes/call');



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
//app.get('/cloud/alt', cloud.viewAlt);
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
app.get('/positiveThinking', positiveThinking.view);
app.get('/stretch', stretch.view);
app.get('/powerstance', powerstance.view);
app.get('/riddle', riddle.view);
app.get('/joke', joke.view);
app.get('/run', run.view);
app.get('/flowers', flowers.view);
app.get('/music', music.view);
app.get('/gum', gum.view);
app.get('/toeTensing', toeTensing.view);
app.get('/guidedImagry', guidedImagry.view);
app.get('/quietEars', quietEars.view);
app.get('/reflect_life', reflect_life.view);
app.get('/draw', draw.view);
app.get('/article', article.view);
app.get('/coffee', coffee.view);
app.get('/walk', walk.view);
app.get('/travel', travel.view);
app.get('/secret', secret.view);
app.get('/puzzle', puzzle.view);
app.get('/call', call.view);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
