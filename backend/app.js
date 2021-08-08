const express = require('express');
const mysql = require('mysql');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser')
// const limiter = require('./middleware/limit');
const dotenv = require('dotenv').config();
// ajouter le helmet pour protéger http header
const helmet = require('helmet');
const db = require('./db_conextion/db_conextion');


const UserRouter = require('./routers/user');
const PostsRouter = require('./routers/post');
// const CommentsRouter = require('./routers/comment');


const app = express();

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(cors());
app.use(express.json());


// app.get('/api/Allposts',(req, res) => {
//   db.query('SELECT * FROM `posts` INNER JOIN comments', (err, result )=> {
   
//     let posts = {};
    
//     if (err) {
//       throw err;
//     }
//     for (let index = 0; index < result.length; index++) {
//       const id = result[index].id;
//       let post = posts[id];
//       if(!post) {
//        post = {
//           id,
//           user_id: result[index].user_id,
//           title: result[index].title,
//           post: result[index].post,
//           datePost: result[index].datePost,
//           comments:[],
//         };
        
//       }
//       let comment = {
//         comment:  result[index].comment
//       };
//       post.comments.push(comment);
//       posts[id] = post;
//     }
//     res.status(200).json(result)
//   });
// });
app.use('/api/users', UserRouter);
app.use('/api/posts', PostsRouter);
// app.use('/api/comments', CommentsRouter);

module.exports = app;