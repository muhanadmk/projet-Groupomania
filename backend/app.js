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
const CommentsRouter = require('./routers/comment');


const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(cors());
app.use(express.json());
app.use('/api/users', UserRouter);
app.use('/api/posts', PostsRouter);
app.use('/api/comments', CommentsRouter);


module.exports = app;