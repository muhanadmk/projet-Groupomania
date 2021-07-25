const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const db = require('../db_conextion/db_conextion');
const dotenv = require('dotenv').config();


exports.writePost = (req, res) => {
  const post = {
    user_id: req.body.userId,
    title: req.body.username,
    post: req.body.post,
  }
  db.query('INSERT INTO posts SET ?', post, (err, result) => {
    if (err) {
      throw err;
    }
    res.status(201).json({ message: 'post créé !' });
  });
}