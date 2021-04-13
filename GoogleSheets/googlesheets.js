
var config = require('../../config/config');
const {google} = require('googleapis');
// const {GoogleSpreadsheet} = require('google-spreadsheet');
const client = require("./connectClient")
const api = google.sheets({version: 'v4', auth: client});

var getSheet = function(callback) {
    try {
        const data =  {
            spreadsheetId: '1Rs8-PGv2WAEdiJfVdhh5uTA2WegW4UZoII22fmz-d7Y',
            range: 'Data!A:D'
        }
        const result = api.spreadsheets.values.get(data,(err, result) => {
            if (err) {
              console.log(err);
              callback(err);
            } else {
              console.log('Sheet Values.', result.data.values);
              callback(null,result.data.values)
            }
        });
    }
    catch(err) {
        console.error(error);
        callback(error);
    }
}

 var addRow = function(row,callback) {
    try{

    // let row =[['John','Doe','john@gmail.com','9638527410']]
    const data =  {
        spreadsheetId: '1Rs8-PGv2WAEdiJfVdhh5uTA2WegW4UZoII22fmz-d7Y',
        range: 'Data!A:D',
        valueInputOption: 'USER_ENTERED',
        resource: {  majorDimension: "ROWS", values: row }

    }
    const result =  api.spreadsheets.values.append(data,(err, result) => {
        if (err) {
            console.log(err);
            callback(error);
        } else {
            console.log('%d cells updated.', result.updatedCells);
            callback(null,result);
        }
    });

    console.log(result);
    } 
    catch(err) {
        console.error(error);
        callback(error);
    }
}

module.exports = {
    getSheet : getSheet,
    addRow: addRow
}