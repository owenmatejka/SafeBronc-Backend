var express = require('express');
var app = express();

var database = require('./functions/generic/database');

app.get('/ping', function (req, res) {
    res.send('pong!');
})

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("SafeBronc REST server listening at http://%s:%s", host, port)
})