var mysql = require('mysql2');
var fs = require('fs');

let rawkeys = fs.readFileSync('keys.json');
let keys = JSON.parse(rawkeys);

var connection = mysql.createConnection({
    host: keys.host,
    user: keys.user,
    password: keys.password,
    port: keys.port,
    ssl  : {
        ca : fs.readFileSync('./ca-certificate.crt')
      }
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
})

module.exports = connection;
   