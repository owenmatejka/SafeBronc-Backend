const sql = require("../generic/database.js");
//for nbr in phoneNbrs
module.exports = (PhoneNbrs,eventId) => {
    for (let i = 0; i < PhoneNbrs.length; i++) {
        sql.query(`INSERT INTO safebronc.contacts VALUES('${PhoneNbrs[i]}','${'Sun'}','${'Zach'}',${eventId}, ${false})`)
    }
}

//    send text
//    event listener
//    get phone number and set isVerified to true
//let phoneNbrs = 0;
//sql.query(`SELECT * FROM contacts WHERE PhoneNbr = ${phoneNbr}`)
// add contactId to event(ContactIds)