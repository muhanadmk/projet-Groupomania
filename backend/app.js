const express = require('express');
const mysql = require('mysql');
const path = require('path');
const cors = require('cors');

// const limiter = require('./middleware/limit');
const dotenv = require('dotenv').config();
// ajouter le helmet pour protéger http header
const helmet = require('helmet');
const db = require('./db_conextion/db_conextion');


const UserRouter = require('./routers/user');
const PostsRouter = require('./routers/post');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(cors());
app.use(express.json());
// Create table
app.use('/api/users', UserRouter);
app.use('/api/posts', PostsRouter);

app.get('/getpost/:post_id', (req, res) => {
  let sql = `SELECT * FROM posts WHERE post_id = ${req.params.post_id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Post fetched...');
  });
});
//CREATE TABLE `groupomania`.`posts` ( `id` INT(11) NOT NULL AUTO_INCREMENT , `post_id` INT(11) NOT NULL , `description` VARCHAR(255) NOT NULL , `Comments` VARCHAR(255) NOT NULL , `likes` INT(100) NOT NULL AUTO_INCREMENT , INDEX (`likes`), UNIQUE (`id`)) ENGINE = InnoDB;
app.post('/adduser', (req, res) => {
  let post = { email: 'mouhandada@gmai.com', password: '156488489' };
  let sql = 'INSERT INTO user SET ?';
  let query = db.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Post 2 added...');
  });
});

app.get('/getall', (req, res) => {
  console.log('muhanad');
  res.send('bravvoooooo')
});




module.exports = app;