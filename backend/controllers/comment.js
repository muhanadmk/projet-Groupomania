const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const db = require('../db_conextion/db_conextion');
const dotenv = require('dotenv').config();


exports.writeComment = (req, res) => {
  const Comment = {
    user_id: req.body.userId,
    post_id: req.body.postId,
    comment: req.body.comment
  }
  db.query('INSERT INTO Comments SET ?', Comment, (err, result) => {
    if (err) {
      throw err;
    }
    res.status(201).json({ message: 'Comment créé !' });
  });
}

exports.modifierComment = (req, res, next) => {
  const idComment = req.params.id;
  db.query('SELECT `user_id` FROM `comments` WHERE id = ?',idComment , (err, result) => {
    if (err) {
      throw err;
    }
    const userId = req.body.userId;
    const userid = result[0].user_id;
    const commentModifier = req.body.comment;
    if (userId == userid) {
      db.query(`UPDATE comments SET comment ='${commentModifier}' WHERE id = ?`, idComment , (err, result) => {
        if (err) {
          throw err;
        }
        res.status(200).json({ message: 'comments modifié !' });
      })
    }
    else {
      res.status(401).json({ message: 'Invalid user ID !' });
    };
  });
}


exports.deleteComment = (req, res, next) => {
  const idComment = req.params.id;
  db.query('SELECT `user_id` FROM `comments` WHERE id = ?', idComment, (err, result) => {
    if (err) throw err;
    const userid = result[0].user_id;
    userId = req.body.userId;
    if (userid == userId) {
      db.query('DELETE FROM `comments` WHERE id = ?', idComment, (err, result) => {
        if (err) {
          throw err;
        }
        res.status(204).json({ message: 'Comment deleted !' });
      });
    }
    else {
      res.status(401).json({ message: 'Invalid user ID !' });
    };
  });
}
