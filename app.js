var express = require('express');
var app = express();
/* var sql = require('mssql');
var config = {
    user: 'books',
    password: 'pluralsight1@',
    server: 'gpnju6fwr2.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
    database: 'Books',

    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
};

sql.connect(config, function (err) {
    console.log(err);
});
 */
var port = process.env.PORT || 5000;
var nav = [{
    Link: '/Books',
    Text: 'Book'
}, {
    Link: '/Authors',
    Text: 'Author'
}];

var bookRouter = require('./src/routes/bookRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello from render',
        nav: [{
            Link: '/Books',
            Text: 'Books'
        }, {
            Link: '/Authors',
            Text: 'Authors'
        }]
    });
});

app.get('/books', function (req, res) {
    res.send('Hello Books');
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});