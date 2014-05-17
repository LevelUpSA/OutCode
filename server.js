// Required files for the web server
var index = require('./server/index')
var register = require('./server/registration')

var bodyParser = require('body-parser');
var express = require('express');
var app = express();


app.use(bodyParser.json());
app.get('/', index.index);

app.get('/test', function(req, res) {

	response = '{ "name": "Gabriel"}'
	parsed_json = JSON.parse(response);
	res.send(parsed_json)
});


app.post('/register', register.register_user);


app.use(express.static(__dirname + '/'));
var port = Number(process.env.PORT || 4000);
app.listen(port);