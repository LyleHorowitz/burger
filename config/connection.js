var mysql = require('mysql');

var connection;

if (process.env.BurgerDB_URL) {
	connection = mysql.createConnection(process.env.BurgerDB_URL);
} else {
	connection = mysql.createConnection({
		port: 4500,
		host: 'localhost',
		user: 'root',
		password: 'jddonuts',
		database: 'burgers_db'
	});
};

connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

module.exports = connection;