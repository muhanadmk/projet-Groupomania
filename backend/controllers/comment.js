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