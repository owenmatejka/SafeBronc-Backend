// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = 'AC2760e38964b783e73be8746d4b5fab8d';
const authToken = 'cd3828625fb4ad6fddd89a9359197729';
const client = require('twilio')(accountSid, authToken);

client.verify.services.create({friendlyName: 'SafeBronc Verification'})
    .then(service => console.log(service.sid));

client.verify.services('AC2760e38964b783e73be8746d4b5fab8d')
    .verifications
    .create({to: '+16692566183', channel: 'sms'})
    .then(verification => console.log(verification.status));

client.verify.services('AC2760e38964b783e73be8746d4b5fab8d')
    .verificationChecks
    .create({to: '+16692566183', code: '123456'})
    .then(verification_check => console.log(verification_check.status));