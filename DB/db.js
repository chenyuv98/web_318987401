const mysql = require('mysql2');
const dbConfig = require('./db.config');

// create connection
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DATABASE
});
//open the connection

connection.connect( error =>{
    if (error) throw error;
    console.log("Success in connecting to the database!");
});

module.exports = connection;