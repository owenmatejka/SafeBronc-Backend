const sql = require("../generic/database.js");

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes()+5 + ":" + today.getSeconds();
var dateTime = date+' '+time;

module.exports = (eventName, eventLocation, PhoneNbrs) => {
    sql.query(`INSERT INTO events(EventName,Location,ExpireTime,PhoneNbrs) 
    VALUES(${eventName},${eventLocation},${dateTime},${""})`)
    //for nbr in phoneNbrs
    
    //    send text
    return {}
}