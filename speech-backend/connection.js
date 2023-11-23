const mysql = require('mysql');
const dotenv = require('dotenv')
dotenv.config()

const connection = mysql.createConnection({
    host:process.env.HOSTNAME,
    user:process.env.DBUSER,
    database:process.env.DBNAME,
    password:process.env.DBPASSWORD,
    port:3306
})

connection.connect();
module.exports = connection;