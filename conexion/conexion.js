const {Client} = require('pg');
const connectionData = {
  user: 'xlrulqljvjpxey',
  host: 'ec2-18-211-48-247.compute-1.amazonaws.com',
  database: 'dbmtqhubrejvko',
  password: 'b309e546a272c0e995b3bcb82b353d2c9fccf67e8bae26f70c5e8f113c92d18c',
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  }
}
const connection = new Client(connectionData)

/*
const { Client } = require('pg');

const connection = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
*/
connection.connect();

/*
connection.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  console.log("conexion pg ok");
});

connection.query("DELETE FROM alarmas WHERE idalarmas=1", function(err, rows) {
  if (err) {
    console.log("Error deleting : %s ", err);
  }
  console.log("Ok deleting : %s ");
});
*/

module.exports = connection;