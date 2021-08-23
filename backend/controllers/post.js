const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const db = require("../db_conextion/db_conextion");
const fs = require("fs");

exports.writePost = (req, res, next) => {
  db.query(
    "SELECT username FROM users WHERE id = ?",
    req.params.userId,
    (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      const username = result[0].username;
      const newPost = {
        user_id: req.params.userId,
        title: req.body.title,
        imagePostUrl: null,
        post: req.body.post,
      };
      if (req.file && req.file.filename) {
        newPost.imagePostUrl = `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`;
      }

      if (newPost.title == "" || newPost.post == "") {
        return res.status(204).json({ error: "missing parameters" });
      }
      db.query("INSERT INTO posts SET ?", newPost, (err, result) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
          return;
        }
        let NewPost = Object.assign(newPost, {
          username: { username: username },
        });
        return res.status(201).json(NewPost);
      });
    }
  );
};

exports.deletePost = (req, res, next) => {
  const idPost = req.params.id;
  db.query(
    "SELECT `user_id` , `imagePostUrl` FROM `posts` WHERE post_id = ?",
    idPost,
    (err, result) => {
      if (err) {
        throw err;
      }
      const userid = result[0].user_id;
      userId = req.params.userId;
      if (userid == userId) {
        const imege = result[0].imagePostUrl;
        if (imege != null) {
          const filename = result[0].imagePostUrl.split("/images/")[1];
          fs.unlink(`images/${filename}`, () => {
            db.query(
              "DELETE FROM `posts` WHERE post_id = ?",
              idPost,
              (err, result) => {
                if (err) {
                  console.log(err);
                  res.sendStatus(500);
                  return;
                }
                return res.status(200).json({ message: "post deleted !" });
              }
            );
          });
        } else {
          db.query(
            "DELETE FROM `posts` WHERE post_id = ?",
            idPost,
            (err, result) => {
              if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
              }
              return res.status(200).json({ message: "post deleted !" });
            }
          );
        }
      } else {
        res.status(401).json({ message: "Invalid user ID !" });
      }
    }
  );
};

exports.modifierPost = (req, res, next) => {
  const objectPost = req.file
    ? {
        title: req.body.title,
        post: req.body.post,
        imagePostUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : {
        title: req.body.title,
        post: req.body.post,
      };
  const idPost = req.params.id;
  db.query(
    "SELECT `user_id` FROM `posts` WHERE post_id = ?",
    idPost,
    (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      const userid = result[0].user_id;
      const userId = req.body.decodedToken.userId;
      if (userId == userid) {
        if (req.body.post == null || req.body.post == null) {
          return res
            .status(401)
            .json({ message: "vous pouvez pas laisser la post vide !!" });
        }
        db.query(
          "UPDATE posts SET ? WHERE posts.post_id = ?",
          [objectPost, idPost],
          (err, result) => {
            if (err) {
              console.log(err);
              res.sendStatus(500);
              return;
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
  const page = req.query.page;
  const limit = req.query.limit;
  userId = req.params.id;
  db.query(
    "SELECT * FROM posts INNER JOIN users ON posts.user_id = users.id AND  users.id = ? ORDER BY datePost DESC",
    userId,
    (err, postsUser) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      for (let i = 0; i < postsUser.length; i++) {
        delete postsUser[i].password;
        delete postsUser[i].email;
        res.status(200).json(postsUser);
        return;
      }
    }
  );
};

exports.getAllPsot = (req, res, next) => {
  db.query(
    "SELECT * FROM posts INNER JOIN users ON posts.user_id = users.id ORDER BY datePost DESC",
    (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      for (let i = 0; i < result.length; i++) {
        delete result[i].password;
        delete result[i].email;
        res.status(200).json(result);
        return;
      }
    }
  );
};

exports.AdminPostDelete = (req, res, next) => {
  const idPost = req.params.id;
  const userIdAdmin = req.params.adminId;
  db.query(
    "SELECT admin FROM users WHERE id = ?",
    userIdAdmin,
    (err, result) => {
      if (err) {
        res.status(401).json({ message: "err sql request !!!" });
      }
      const admin = result[0].admin;
      if (admin === 1) {
        db.query(
          "SELECT imagePostUrl FROM `posts` WHERE post_id = ?",
          idPost,
          (err, result) => {
            if (err) {
              console.log(err);
              res.sendStatus(500);
              return;
            }
            const filename = result[0].imagePostUrl.split("/images/")[1];
            fs.unlink(`images/${filename}`, () => {
              db.query(
                "DELETE FROM `posts` WHERE post_id = ?",
                idPost,
                (err, result) => {
                  if (err) {
                    console.log(err);
                    res.sendStatus(500);
                    return;
                  }
                  res.status(200).json({ message: "post deleted !" });
                  return;
                }
              );
            });
          }
        );
      }
    }
  );
};
