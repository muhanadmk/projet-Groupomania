const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const db = require('../db_conextion/db_conextion');
const dotenv = require('dotenv').config();



exports.writePost = (req, res, next) => {
  const post = {
    user_id: req.body.userId,
    title: req.body.title,
    post: req.body.post,
    
  }
  db.query('INSERT INTO posts SET ?', post, (err, result) => {
    if (err) {
      throw err;
    }
    res.status(201).json({ message: 'post créé !' });
  });
}

exports.deletePost = (req, res, next) => {
  const idPost = req.params.id;
  db.query('SELECT `user_id` FROM `posts` WHERE id = ?', idPost, (err, result) => {
    if (err) throw err;
    const userid = result[0].user_id;
    userId = req.body.userId;
    if (userid == userId) {
      db.query('DELETE FROM `posts` WHERE id = ?', idPost, (err, result) => {
        if (err) {
          throw err;
        }
        res.status(204).json({ message: 'post deleted !' });
      });
    }
    else {
      res.status(401).json({ message: 'Invalid user ID !' });
    };
  });
}

exports.modifierPost = (req, res, next) => {
  const idPost = req.params.id;
  db.query('SELECT `user_id` FROM `posts` WHERE id = ?', idPost, (err, result) => {
    if (err) {
      throw err;
    }
    const userid = result[0].user_id;
    const userId = req.body.userId;
    const postModifier = req.body.imageUrlPost;
    if (userId == userid) {
      db.query(`UPDATE posts SET post='${postModifier}' WHERE id = ?`, idPost, (err, result) => {
        if (err) {
          throw err;
        }
        res.status(200).json({ message: 'post modifié !' });
      })
    }
    else {
      res.status(401).json({ message: 'Invalid user ID !' });
    };
  });
}

// exports.getpostofuser = (req, res, next) => {
//   db.query(`SELECT * FROM posts INNER JOIN users ON posts.user_id = ${req.body.userId}`,  (err, result) => {
//     console.log("§§§", result);
//     if (err) {
//       throw err;
//     }
//     res.send(200).json(result)
//   });
// };


exports.getOnePsotByUserId = (req, res, next) => {
  db.query('SELECT * FROM posts INNER JOIN comments ON posts.id = comments.post_id INNER JOIN users ON posts.user_id = ?', req.params.id,  (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result)
  });
};

//SELECT * FROM posts INNER JOIN users ON posts.user_id = users.id JOIN comments ON comments.post_id = posts.id
exports.getAllPsot = (req, res, next) => {
  db.query(`SELECT * FROM posts left join comments on comments.post_id = posts.id;`,  (err, result) => {
    
    let posts = {};
    
    if (err) {
      throw err;
    }
    for (let index = 0; index < result.length; index++) {
      const id = result[index].id;
      let post = posts[id];
      if(!post) {
       post = {
          id,
          user_id: result[index].user_id,
          title: result[index].title,
          post: result[index].post,
          datePost: result[index].datePost,
          comments:[],
        };
        
      }
      let comment = {
        comment:  result[index].comment
      };
      post.comments.push(comment);
      posts[id] = post;
    }
    res.status(200).json(result)
  });
};


exports.AdminDeletePost = (req, res, next) => {
  const userIdAdmin = req.params.id;
  const idPost = req.body.postId;
  db.query("SELECT admin FROM users WHERE id = ?", userIdAdmin,(err, result) => {
    console.log(result);
      if (err) {
        res.status(401).json({ message: "Identifiant invalide !" });
      } 
      if (result[0].admin === 1) {
        db.query("DELETE FROM posts WHERE id = ?", idPost, (err, result) => {
          if (err){
               res.status(403).json({ message: "user not found!" });
          } 
          res.status(200).json( "post supprimé !" );
        });
      } else {
        res.status(403).json({ message: "vous etes pas admin !" });
      }
    }
  );
};


