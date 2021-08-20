const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const db = require('../db_conextion/db_conextion');
const dotenv = require('dotenv').config();


exports.writeComment = (req, res, next) => {
  const objectComment = {
      Comment: req.body.Comment,
      post_id: req.body.post_id,
      user_id: req.body.user_id,
    };
  db.query('INSERT INTO Comments SET ?', objectComment, (err, result) => {
    if (err) {
    throw err;
    }
    return res.status(201).json({ message: 'Comment créé !' });
  });
};

exports.getAllComments = (req, res, next) => {
  const idPost = req.params.id;
  let sql ='SELECT * FROM comments LEFT JOIN users ON comments.user_id = users.id WHERE comments.post_id = ? ORDER BY dateComment DESC'
  db.query(sql, idPost, (err, result)=>{
    if (err) {
      res.status(500).json({ message: " err sql !" })
    }
    if (result.length === 0) {
      res.status(204).json({ message: "il n'ya pas de commentaire"})
  } else {
      res.status(200).json(result);
  }
  });
};



exports.modifierComment = (req, res, next) => {
  const objectComment = req.file ?
  {
    Comment: req.body.Comment,
    imageCommentUrl	: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
  }
   :
   {
    Comment: req.body.Comment
  }
  const idComment = req.params.id;
  db.query('SELECT * FROM comments WHERE user_id = ? AND comment_id = ?', [req.body.user_id, req.body.Comment_id], (err, result) => {
    if (err) {
      res.status(500).json({ message: " err sql !" })
    }
    const userId = req.body.userId;
    const userid = result[0].user_id;
    if (userId == userid) {
      db.query('UPDATE comments SET ? WHERE comment_id = ?', [commentObject, result[0].comment_id] , (err, result) => {
        if (err) {
          res.status(500).json({ message: " err sql !" })
        }
        res.status(200).json({ message: 'comments modifié !' });
      })
    }
    else {
      res.status(401).json({ message: 'Invalid user ID !' });
    };
  });
};



exports.deleteComment = (req, res, next) => {
  const idComment = req.params.id;
  db.query('SELECT * FROM `comments` WHERE id = ?', idComment, (err, result) => {
    if (err) {
     res.status(500).json({ message: " err sql !" })
    }  
    const userid = result[0].user_id;
    userId = req.body.userId;
    if (userid == userId) {
      if(result[0].imageCommentUrl != null) {
        const filename = result[0].imageCommentUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          db.query('DELETE FROM `comments` WHERE id = ?', idComment, (err, result) => {
            if (err) {
              res.status(500).json({ message: " err sql !" })
            }
            res.status(200).json({ message: 'Comment deleted !' });
          });
        });
      }
      else {
        db.query('DELETE FROM `comments` WHERE id = ?', idComment, (err, result) => {
          if (err) {
            res.status(500).json({ message: " err sql !" })
          }
          res.status(200).json({ message: 'Comment deleted !' });
        });
    }
    }
    else{
      res.status(401).json({ err: new Error ('Requête invalide !')});
    }
  });
};

exports.AdminDeleteComment = (req, res, next) => {
  const userIdAdmin = req.params.id;
  const idComment = req.body.idComment;
  db.query("SELECT admin FROM users WHERE id = ?", userIdAdmin,(err, result) => {
      if (err) {
        res.status(401).json({ message: "Identifiant invalide !" });
      } 
      if (result[0].admin === 1) {
        const filename = result[0].imageCommentUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          db.query('DELETE FROM `comments` WHERE id = ?', idComment, (err, result) => {
            if (err) {
              res.status(500).json({ message: " err sql !" })
            }
            res.status(200).json({ message: 'Comment deleted !' });
          });
        });
      } else {
        res.status(403).json({ message: "vous etes pas admin !" });
      }
    }
  );
};
