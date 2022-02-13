/*var fs = require('fs');

let rawkeys = fs.readFileSync('./keys/twilio.json');
let keys = JSON.parse(rawkeys);

const accountSid = keys.accountSid;
const authToken = keys.authToken;

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);
client.logLevel = 'debug';

exports.send = function (to, body) {
  client.messages
  .create({
    to: '+1' + to,
    from: '+18456825546',
    body: body
  })
  .then(message => console.log(message.sid));
}


  console.log("Done!")*/