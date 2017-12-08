var express = require('express');
var app = express();
var port = 3000 || process.env.PORT;

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(port, function(err) {
    console.log('running server on port ' + port);
});