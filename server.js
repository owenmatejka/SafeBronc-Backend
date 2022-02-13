var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const database = require('./functions/generic/database');

const runAlert = require('./functions/REST/runAlert')

app.get('/ping', function (req, res) {
    res.json({message: 'Pong!' });
})

app.post('/runAlert', function(req, res) {
    runAlert(req.body.name)
    res.json({message: 'Alert sent!' });
})

//app.use('/api');

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



/*var createEvent = require('./functions/REST/createEvent')
var updateEvent = require('./functions/REST/updateEvent')
var coordinate;
createEvent('test3', '69:430',[['1234556','Guohao','sun']]); //eventname, coordinate*/
     

/*var messageSender = require('./functions/generic/messageSender')
messageSender.send('6178931720', 'test')
*/
//after receive message back call updateEvent
//updateEvent(phonenbr); //phone numbers, eventID(need to be change)
    