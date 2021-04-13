
var config = require('../../config/config');
const {google} = require('googleapis');

const client = new google.auth.JWT(
  config.sheets.client_email,
  null,
  config.sheets.private_key,
  ['https://www.googleapis.com/auth/spreadsheets']  
);

client.authorize(function(err,tokens){
    if(err) {
        console.log(err);
        return;
    } else {
        console.log("Connected");
        // addRow(client);
        // getSheet(client);
    }
})

module.exports = client;