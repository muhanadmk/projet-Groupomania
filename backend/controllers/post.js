const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const db = require('../db_conextion/db_conextion');
const dotenv = require('dotenv').config();


exports.writePost = (req, res, next) => {
  const post = {
    user_id: req.body.userId,
    title: req.body.username,
    post: req.body.post
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
    // console.log(userid);
    // console.log(userId);
    if (userid == userId) {
      // console.log('good');
      db.query('DELETE FROM `posts` WHERE id = ?', idPost, (err, result) => {
        if (err) {
          throw err;
        }
        res.status(204).json({ message: 'post deleted !' });
      });
    }
    else {
      // console.log('baaaaaad');
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
    const postModifier = req.body.post;
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

exports.getAllpsot = (req, res, next) => {
  db.query('SELECT title, post FROM posts;', (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result)
  });
};

