const mysql = require('mysql2'); //importing the package just downloaded
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'Sriashwathi3.',
    database:'todotaskmanager'

})
module.exports=connection;


