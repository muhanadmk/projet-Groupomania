const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const db = require('../db_conextion/db_conextion');
const dotenv = require('dotenv').config();



exports.writePost = (req, res, next) => {
  const post = {
    user_id: req.body.userId,
    title: req.body.username,
    post: req.body.post,
    datePost: new Date(),
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

exports.getAllPsot = (req, res, next) => {
  db.query(`SELECT * FROM posts INNER JOIN comments`,  (err, result) => {
    if (err) {
      throw err;
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


