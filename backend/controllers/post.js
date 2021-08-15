const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const db = require("../db_conextion/db_conextion");
const fs = require('fs');

exports.writePost = (req, res, next) => {
  // if (req.file.filename = undefined) {
  //   console.log("image undefined");
  //   delete newPost.imagePostUrl; 
  // }
  const newPost = {
    user_id: req.body.userId,
    title: req.body.title,
    imagePostUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    post: req.body.post,
  };
  
  if (newPost.title == "" || newPost.post == "" ) {
    return res.status(400).json({ error: "missing parameters" });
  }

  db.query("INSERT INTO posts SET ?", newPost, (err, result) => {
    if (err) {
      throw err;
    }
    res.status(201).json({ message: "post créé !" });
  });
};

exports.deletePost = (req, res, next) => {
  const idPost = req.params.id;
  db.query("SELECT `user_id` , `imagePostUrl` FROM `posts` WHERE post_id = ?", idPost, (err, result) => {
      if (err) {
        throw err;
      }
      const userid = result[0].user_id;
      // console.log(result[0].imagePostUrl);
      userId = req.body.userId;
      if (userid == userId) {
        const filename = result[0].imagePostUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`,()=>{
          db.query("DELETE FROM `posts` WHERE post_id = ?", idPost, (err, result) => {
            if (err) {
              throw err;
            }
            res.status(200).json({ message: "post deleted !" });
          });
        
        });
      } 
      else {
        res.status(401).json({ message: "Invalid user ID !" });
      }
    }
  );
};


exports.modifierPost = (req, res, next) => {
  const idPost = req.params.id;
  db.query(
    "SELECT `user_id` FROM `posts` WHERE post_id = ?",
    idPost,
    (err, result) => {
      if (err) {
        throw err;
      }
      const userid = result[0].user_id;
      const userId = req.body.userId;
      if (userId == userid) {
        // const imagePostUrl = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
        if (req.body.post == null || req.body.post == null) {
          return res.status(401).json({ message: "vous pouvez pas laisser la post vide !!" });
        }
        db.query(
          `UPDATE posts SET post='${req.body.post}', title='${req.body.title}' WHERE post_id = ?`, idPost,
          (err, result) => {
            if (err) {
              throw err;
            }
            res.status(200).json({ message: "post modifié !" });
          }
        );
      } else {
        res.status(401).json({ message: "Invalid user ID !" });
      }
    }
  );
};


exports.getProfileEtPosts = (req, res, next) => {
  user_id = req.params.id;
  db.query("SELECT * FROM `posts` WHERE posts.user_id = ?", user_id, (err, postsUser) => {
      if (err) {
        throw err;
      }
      let Profile = {             
        postOfUser: [],
        userData: []
      };
      Profile.postOfUser.push(postsUser);   
        db.query('SELECT username, admin FROM users WHERE users.id = ?', user_id ,(err, userresult) => {
          if (err) {
            throw err;   
          }
          Profile.userData.push(userresult[0]);  
          res.status(200).json(Profile);  
        });
  });
};


exports.getAllPsot = (req, res, next) => {
  db.query("SELECT * FROM posts INNER JOIN users ON posts.user_id = users.id ORDER BY datePost DESC", (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result);  
  });
}


exports.AdminDeletePost = (req, res, next) => {
  const  idPost = req.params.id;
  const userIdAdmin = req.body.userId;
  db.query(
    "SELECT admin FROM users WHERE id = ?", userIdAdmin, (err, result) => {
      if (err) {
        res.status(401).json({ message: "Identifiant invalide !" });
      }
      if (result[0].admin === 1) {
        const filename = result[0].imagePostUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`,()=>{
          db.query("DELETE FROM `posts` WHERE post_id = ?", idPost, (err, result) => {
            if (err) {
              throw err;
            }
            res.status(200).json({ message: "post deleted !" });
          });
        
        });
      }
    }
  );
};