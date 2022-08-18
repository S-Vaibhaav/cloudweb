var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'dbrestaurant.cefojpvupkf7.us-east-1.rds.amazonaws.com',
    port: '3306',
    user:'rest',
    password:'tG068098',
    database: 'restaurant_review'
});

connection.connect(err => {  // test out connetion and console.log error if there is one
    if (err) throw err;
    console.log('Connected To DB');
}); 
module.exports = connection;