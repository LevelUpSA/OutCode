var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/test', function(req, res) {

    response = '{ "name": "Gabriel"}'
    parsed_json = JSON.parse(response);
    res.send(parsed_json)
});

app.use(express.static(__dirname + '/'));

app.listen(3000);