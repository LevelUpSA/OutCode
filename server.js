// Required files for the web server
var index = require('./server/index');
var register = require('./server/registration');
var login =require('./server/login');


var bodyParser = require('body-parser');
var express = require('express');
var session = require('express-session');
var cookies = require('cookie-parser');
var app = express();


app.use(bodyParser.json());
app.use(cookies());
app.use(session({ secret: 'outCode is the best', cookie: { maxAge: 60000 }}))

app.get('/', index.index);

app.get('/test', function(req, res) {

	response = '{ "name": "Gabriel"}'
	parsed_json = JSON.parse(response);
	res.send(parsed_json)
});


app.post('/register', register.register_user);
app.post('/login', login.login_user);

app.use(express.static(__dirname + '/'));
var port = Number(process.env.PORT || 4000);
app.listen(port);