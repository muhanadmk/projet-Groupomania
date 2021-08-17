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
    return res.status(201).json({ message: "post créé !" });
    // res.send(`
    // <div class="card mt-5 mb-5">
    // <div class="card-header">
    // <a type="submit" @click="getPrfile" ></a>
    // </div>
    // <div class="card-title">
    //   <h5 class="card-title">${req.body.title}</h5>
    // </div>
    // <div class="card-body">
    //   <p class="card-text">>${req.body.post}</p>
    //   <img class="card-img" v-bind:src="onepost.imagePostUrl" alt="...">
    //    <p class="card-text text-dark">{{ onepost.datePost }}</p>
    // </div>
    // <button v-if="admin > 0" type="submit" class="btn btn-outline-danger" @click="AdminDeletePost"> Admin Delete Post</button>
    // <button v-else-if="admin <= 0" class="btn btn-outline-danger" @click="DeletePost">Delete Post</button>
    // </div>
    // `);
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
            return res.status(200).json({ message: "post deleted !" });
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
  const objectPost = req.file ?
  {
      title: req.body.title,
      post: req.body.post,
      imagePostUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  } : {
      title: req.body.title,
      post: req.body.post
  };
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
  
        if (req.body.post == null || req.body.post == null) {
          return res.status(401).json({ message: "vous pouvez pas laisser la post vide !!" });
        }
        db.query(
          'UPDATE posts SET ? WHERE posts.post_id = ?', [objectPost, idPost],
          (err, result) => {
            if (err) {
              throw err;
            }
            return res.status(200).json({ message: "post modifié !" });
          }
        );
      } else {
        res.status(401).json({ message: "Invalid user ID !" });
      }
    }
  );
};


exports.getPostsProfile = (req, res, next) => {
  userId = req.params.id;
  db.query("SELECT * FROM `posts` WHERE posts.user_id = ? ORDER BY datePost DESC", userId, (err, postsUser) => {
      if (err) {
        throw err;
      }
      return res.status(200).json(postsUser);  
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

exports.AdminPostDelete = (req, res, next) => {
  const  idPost = req.params.id;
  const userIdAdmin = req.body.userId;
  console.log("idPost", idPost);
  console.log("userIdAdmin" , userIdAdmin);
  db.query("SELECT admin FROM users WHERE id = ?", userIdAdmin, (err, result) => {
      if (err) {
         res.status(401).json({ message: "err sql request !!!" });
      }
      const admin = result[0].admin; 
       if (admin === 1) {
        db.query("SELECT imagePostUrl FROM `posts` WHERE post_id = ?", idPost, (err, result) => {
          if (err) {
            res.status(401).json({ message: "Identifiant invalide !" });
          } 
          const filename = result[0].imagePostUrl.split('/images/')[1];
          fs.unlink(`images/${filename}`,()=>{
            db.query("DELETE FROM `posts` WHERE post_id = ?", idPost, (err, result) => {
              if (err) {
                throw err;
              }
             return res.status(200).json({ message: "post deleted !" });
            });
          });
        });
      }
    });
};