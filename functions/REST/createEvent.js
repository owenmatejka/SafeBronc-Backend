const sql = require("../generic/database.js");

var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + ' ' + time;
var eventId;
module.exports = (eventName, eventLocation,PhoneNbrs) => {
    sql.query(`INSERT INTO safebronc.events 
    VALUES(${'DEFAULT'},'${eventName}','${eventLocation}','${dateTime}','${''}')`);
    //var eventid from database
    /*for (var item in PhoneNbrs) {
        sql.query(`INSERT INTO safebronc.contacts VALUES('${item}','${'Sun'}','${'Zach'}',${1}, ${false})`)
    }*/
    PhoneNbrs.forEach(function(item, index, array) {
        sql.query(`INSERT INTO safebronc.contacts VALUES('${item}','${'Sun'}','${'Zach'}',${1}, ${false})`)
      })
    /*sql.query('SELECT * FROM safebronc.events WHERE id = SCOPE_IDENTITY()',function(err, result)
    {
        if (err) 
            callback(err,null);
        else
            callback(null,result[0].id);

    })*/

    

    return {}
}