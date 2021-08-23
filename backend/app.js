const express = require('express');
const mysql = require('mysql');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv').config();
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

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/users', UserRouter);
app.use('/api/posts', PostsRouter);
app.use('/api/comments', CommentsRouter);


module.exports = app;