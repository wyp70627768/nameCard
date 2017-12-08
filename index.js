var express = require('express');
var app = express();
var port = 3000 || process.env.PORT;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(req, res) {

});

app.listen(port, function(err) {
    console.log('running server on port ' + port);
});