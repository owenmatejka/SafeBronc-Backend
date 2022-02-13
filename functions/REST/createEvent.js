const sql = require("../generic/database.js");

var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + 5 + ":" + today.getSeconds();
var dateTime = date + ' ' + time;

module.exports = (eventName, eventLocation, PhoneNbrs) => {
    sql.query(`INSERT INTO events(EventName,Location,ExpireTime,PhoneNbrs) 
    VALUES(${eventName},${eventLocation},${dateTime},${""})`)

    //for nbr in phoneNbrs
    for (let i = 0; i < PhoneNbrs.length; i++) {
        sql.query(`INSERT INTO contacts(EventName,PhoneNbrs,isVerified) 
        VALUES(${eventName},${PhoneNbrs[i]}), ${false})`)
    }

    //    send text
    //    event listener
    //    get phone number and set isVerified to true
    let phoneNbrs = 0;
    sql.query(`SELECT * FROM contacts WHERE PhoneNbr = ${phoneNbr}`)
    // add contactId to event(ContactIds)

    return {}
}