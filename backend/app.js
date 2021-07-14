const express = require('express');
const mysql = require('mysql');
const path = require('path');
const cors = require('cors');

// const limiter = require('./middleware/limit');
// const stuffRoutes = require('./routes/stuff');
// const userRoutes = require('./routes/user');

const dotenv = require('dotenv')
dotenv.config();
// ajouter le helmet pour protéger http header
const helmet = require('helmet');

// Create connection à mysql
const db = mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.USERNAME,
  password : process.env.PASSWORD,
  database : process.env.DATABASE,
  port     : process.env.DB_PORT
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

app.post('/adduser', (req, res) => {
  let post = {email:'mouhandada@gmai.com', password:'156488489'};
  let sql = 'INSERT INTO user SET ?';
  let query = db.query(sql, post, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('Post 2 added...');
  });
});

app.get('/getall', (req, res)=>{
console.log('muhanad');
});

app.use(express.json());
app.use(cors());

module.exports = app;