// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const crypto = require('crypto');
// const db = require('../db_conextion/db_conextion');
// const dotenv = require('dotenv').config();


// exports.writeComment = (req, res, next) => {
//   const Comment = {
//     user_id: req.body.userId,
//     post_id: req.body.postId,
//     comment: req.body.comment,
//     dateComment: new Date(),
//   }
//   db.query('INSERT INTO Comments SET ?', Comment, (err, result) => {
//     if (err) {
//       throw err;
//     }
//     res.status(201).json({ message: 'Comment créé !' });
//   });
// }



// exports.modifierComment = (req, res, next) => {
//   const idComment = req.params.id;
//   db.query('SELECT `user_id` FROM `comments` WHERE id = ?',idComment , (err, result) => {
//     if (err) {
//       res.status(401).json({ message: " err sql !" })
//     }
//     const userId = req.body.userId;
//     const userid = result[0].user_id;
//     const commentModifier = req.body.comment;
//     if (userId == userid) {
//       db.query(`UPDATE comments SET comment ='${commentModifier}' WHERE id = ?`, idComment , (err, result) => {
//         if (err) {
//           throw err;
//         }
//         res.status(200).json({ message: 'comments modifié !' });
//       })
//     }
//     else {
//       res.status(401).json({ message: 'Invalid user ID !' });
//     };
//   });
// }



// exports.deleteComment = (req, res, next) => {
//   const idComment = req.params.id;
//   db.query('SELECT `user_id` FROM `comments` WHERE id = ?', idComment, (err, result) => {
//     if (err) throw err;
//     const userid = result[0].user_id;
//     userId = req.body.userId;
//     if (userid == userId) {
//       db.query('DELETE FROM `comments` WHERE id = ?', idComment, (err, result) => {
//         if (err) {
//           throw err;
//         }
//         res.status(200).json({ message: 'Comment deleted !' });
//       });
//     }
//     else {
//       res.status(401).json({ message: 'Invalid user ID !' });
//     };
//   });
// }

// exports.AdminDeleteComment = (req, res, next) => {
//   const userIdAdmin = req.params.id;
//   const idComment = req.body.idComment;
//   db.query("SELECT admin FROM users WHERE id = ?", userIdAdmin,(err, result) => {
//       if (err) {
//         res.status(401).json({ message: "Identifiant invalide !" });
//       } 
//       if (result[0].admin === 1) {
//         db.query("DELETE FROM comments WHERE id = ?", idComment, (err, result) => {
//           if (err){
//                res.status(403).json({ message: "user not found!" });
//           } 
//           res.status(200).json( "Comment  supprimé !" );
//         });
//       } else {
//         res.status(403).json({ message: "vous etes pas admin !" });
//       }
//     }
//   );
// };
