const sql = require("../generic/database.js");
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes()+5 + ":" + today.getSeconds();
var dateTime = date+' '+time;
deleteEvent (() =>{
    sql.query(`DELETE FROM events WHERE ExpireTime=${dataTime}`);

})

//TODO! google search put deleteEvennt into a thread

//npm install react-native-multithreading
//npx pod-install

const result = await spawnThread(() =>{
    deleteEvent();
})