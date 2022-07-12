var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var usersRouter = require('./routes/user');
var accountRouter = require('./routes/account');
var imagesRouter = require('./routes/images');
var messagesRouter = require('./routes/messages');
var videosRouter = require('./routes/videos');

app.use(cors());
app.use(bodyParser.json());

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sairam'
});

db.connect((err) => {
    if (err) {
        // throw err;
        console.log('Mysql not Connected...');
    } else {
        console.log('Mysql  Connected....');
    }

});

if (db) {
    app.use((req, res, next) => {
        req.db = db;
        next();
    });
}

var date = new Date();

console.log(date.toLocaleDateString());

app.use('/api/user', usersRouter);
app.use('/api/account', accountRouter);
app.use('/api/images', imagesRouter);
app.use('/api/messages', messagesRouter);
app.use('/api/videos', videosRouter);

app.use(express.static(path.join(__dirname, './build')));



app.get('*', function(req, res) {

    res.sendFile(path.join(__dirname, 'public/build', 'index.html'));
});




var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});