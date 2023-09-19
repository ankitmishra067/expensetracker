const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ankitkumar67@"
});

connection.connect((err) => {
  if (err) {
    console.error(' connection failed:', err);
  } else {
    console.log('Database connected ');
  }

  connection.end();
});
