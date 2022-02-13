const sql = require("../generic/database.js");

var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + ' ' + time;


function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
var eventId = generateUUID();
module.exports = (eventName, eventLocation,PhoneNbrs) => {
    sql.query(`INSERT INTO safebronc.events 
    VALUES('${eventId}','${eventName}','${eventLocation}','${dateTime}','${''}')`);

    PhoneNbrs.forEach(function(item, index, array) {
        if (item[0] !== undefined && item[1] !== undefined && item[2] !== undefined) {
            sql.query(`INSERT INTO safebronc.contacts VALUES('${item[0]}','${item[2]}','${item[1]}',${eventId}, ${'False'})`)
        }
      })
    return {}
}