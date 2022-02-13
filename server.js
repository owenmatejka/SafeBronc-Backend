var express = require('express');
var app = express();

var database = require('./functions/generic/database');

var createEvent = require('./functions/REST/createEvent')

app.get('/ping', function (req, res) {
    res.send('pong!');
})

/*
app.post('/createEvent', function (req, res) {
    var body = req.body

    var eventName = body.eventName
    var eventLocation = body.eventLocation
    
})
*/

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("SafeBronc REST server listening at http://%s:%s", host, port)
})

/*
var messageSender = require('./functions/generic/messageSender')
messageSender.send('6178931720', 'test')
*/

var createEvent = require('./functions/REST/createEvent')
var updateEvent = require('./functions/REST/updateEvent')
createEvent('test3', '69:430');
     
updateEvent(['1234566'],2);
    