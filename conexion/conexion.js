
var mysql = require('mysql');
var connection;
connection = mysql.createConnection({
  host: 'localhost',
  port: 3308,
  user: 'root',
  password: 'password',
  database: 'pilates_virtual_class',
  insecureAuth: true
});
module.exports = connection;
