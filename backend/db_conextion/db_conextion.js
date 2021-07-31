// Create connection à mysql

const mysql = require('mysql');


const db = mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.USERNAME,
  password : process.env.PASSWORD,
  database : process.env.DATABASE,
  port     : process.env.DB_PORT
});

// Connectrs
db.connect((err) => {
  if(err){
      throw err;
  }
  console.log('MySql Connected...');
});

module.exports = db;