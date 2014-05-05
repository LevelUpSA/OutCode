// Required files for the web server
var index = require('./server/index')


var express = require('express');
var app = express();


app.get('/', index.index);

app.get('/test', function(req, res) {

    response = '{ "name": "Gabriel"}'
    parsed_json = JSON.parse(response);
    res.send(parsed_json)
});



app.use(express.static(__dirname + '/'));

app.listen(4000);