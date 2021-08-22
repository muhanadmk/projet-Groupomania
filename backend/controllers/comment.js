const db = require('../db_conextion/db_conextion');
const dotenv = require('dotenv').config();


exports.writeComment = (req, res, next) => {
  const objectComment = {
      Comment: req.body.Comment,
      post_id: req.body.post_id,
      user_id: req.body.user_id,
    };
  db.query('INSERT INTO comments SET ?', [objectComment],
   (err, result) => {
    if (err) {
       res.status(500).json({ message: " err sql !" });
       return;
    }
    res.status(201).json({ message: 'Comment créé !' });
    return;
  });
};


exports.getCommentsProfle = (req, res, next) => {
  const idPost = req.params.id;
  let sql ='SELECT * FROM comments INNER JOIN users ON comments.user_id = users.id AND  users.id = ?';
  db.query(sql, idPost, (err, result)=>{
    if (err) {
      return res.status(500).json({ message: " err sql !" });
    }
    if (result.length === 0) {
      return res.status(204).json({ message: "il n'ya pas de commentaire"})
  } else {
    return res.status(200).json(result);
  }
  });
};

exports.deleteComment = (req, res, next) => {
   const idComment = req.params.id;
  db.query('SELECT * FROM comments WHERE Comment_id = ?', idComment, (err, result, field)=>{
    if (err) {
      return res.status(500).json({ message: " err sql !" });
    }
    if (req.params.User == result[0].user_id) {
      db.query('DELETE FROM comments WHERE Comment_id = ?', idComment, (err, result, field) =>{
          if (err) {
            res.status(500).json({ message: " err sql !" });
          } 
          return res.status(200).json({ message: "Comment deleted !"});
      });
    }
   else {
      return  res.status(401).json({ err: new Error ('Requête invalide !')});
    };
  });
};

exports.AdminDeleteComment = (req, res, next) => {
  const userIdAdmin = req.params.idAdmin;
  const idComment = req.params.id;
  db.query("SELECT admin FROM users WHERE id = ?", userIdAdmin,(err, result, field) => {
      if (err) {
        res.status(401).json({ message: " err sql !!" });
        return;
      } 
      if (result[0].admin === 1) {
          db.query(`DELETE FROM comments WHERE Comment_id = ${idComment}`, (err, result, field) => {
            if (err) {
             res.status(500).json({ message: " err sql !" });
             return;
            }
             res.status(200).json({ message: 'Comment deleted !' });
             return;
          });
      } else {
         res.status(401).json({ message: "vous etes pas admin !" });
         return;
      }
    });
};

