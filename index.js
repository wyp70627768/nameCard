var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req, res) {

});

app.listen(port, function(err) {
    console.log('running server on port ' + port);
});