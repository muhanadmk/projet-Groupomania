const express = require('express');
const mysql = require('mysql');
const path = require('path');
// const limiter = require('./middleware/limit');
// const stuffRoutes = require('./routes/stuff');
// const userRoutes = require('./routes/user');

const dotenv = require('dotenv').config();
// ajouter le helmet pour protéger http header
const helmet = require('helmet');

// Create connection à mysql
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'groupomania'
});

// Connect
db.connect((err) => {
  if(err){
      throw err;
  }
  console.log('MySql Connected...');
});

const app = express();


// Create table
app.get('/createpoststable', (req, res) => {
  let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
  db.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('Posts table created...');
  });
});


app.use(express.json());

module.exports = app;