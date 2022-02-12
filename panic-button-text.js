// Twilio Credentials
// To set up environmental variables, see http://twil.io/secure
const accountSid = 'AC2760e38964b783e73be8746d4b5fab8d';
const authToken = 'cd3828625fb4ad6fddd89a9359197729';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    to: '+16692566183',
    from: '+18507794891',
    body: 'Test',
  })
  .then(message => console.log(message.sid));