const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const db = require("../db_conextion/db_conextion");
const dotenv = require("dotenv").config();
const fs = require("fs");

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  // if (email == null || username == null || password == null) {
  //   return res.status(400).json({ error: "missing parameters" });
  // }

  // if (username.length >= 25 || username.length <= 4) {
  //   return res
  //     .status(400)
  //     .json({ error: "wrong username (doit etre entre de 5 - 12)" });
  // }

  // if (email.length >= 50 || email.length <= 4 ) {
  //   return res.status(400).json({ error: "email is not valid" });
  // }

  // if (password.length >= 100 || password.length <= 4 ) {
  //   return res
  //     .status(400)
  //     .json({
  //       error:
  //         "password invalid (must length 4 - 8 and include 1 number at least)",
  //     });
  // }
    bcrypt.hash(req.body.password, 10).then((hashPassword) => {
    const user = {
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    };
    db.query("INSERT INTO users SET ?", user, (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      return res.status(201).json({ message: "Utilisateur créé !" });
    });
  });
};

exports.login = (req, res, next) => {
  const ReqEmail = req.body.email;
  const password = req.body.password;
  if (ReqEmail == null || password == null) {
    return res.status(400).json({ error: "missing parameters" });
  }
  let sql = `SELECT * FROM users WHERE email = ?`;
  db.query(sql, ReqEmail, (err, users) => {
    if (err) {
      res.status(401).json({ error: "Utilisateur non trouvé !" });
    }
    const user = users[0];
    bcrypt
      .compare(password, user.password)
      .then((valid) => {
        if (!valid) {
          return res.status(401).json({ error: "Mot de passe incorrect !" });
        }
        res.status(200).json({
          userId: user.id,
          username: user.username,
          admin: user.admin,
          token: jwt.sign(
            {
              userId: user.id,
              username: user.username,
              admin: user.admin,
              dateUser: user.dateUser
            },
            process.env.SECRET_KEY_JWT,
            {
              expiresIn: "1h",
            }
          ),
        });
      })
      .catch((error) => res.status(500).json({ error }));
  });
};

exports.deleteUser = (req, res, next) => {
  const userId = req.params.id;
  db.query("SELECT id FROM users WHERE id = ?", userId, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    console.log(result[0].id);
    if (result[0].id && userId == result[0].id) {
      db.query("DELETE FROM users WHERE id = ?", userId, (err, result) => {
        if (err) throw err;
        res.status(200).json({ message: "Utilisateur supprimé !" });
      });
    } else {
      return res.status(401).json({ message: "Identifiant invalide !" });
    }
  });
};

exports.AdminDeleteUser = (req, res, next) => {
  const userIdAdmin = req.params.AdminID;
  const userId = req.params.id;
  db.query(
    "SELECT admin FROM users WHERE id = ?",
    userIdAdmin,
    (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      if (result[0].admin === 1) {
        db.query("DELETE FROM users WHERE id = ?", userId, (err, result) => {
          if (err) {
            res.status(500).json({ message: "user not found!" });
            return;
          }
          return res.status(200).json("Utilisateur supprimé  par le admin !");
        });
      }
    }
  );
};

exports.getUser = (req, res, next) => {
  const userId = req.params.id;
  db.query(
    "SELECT username, email, dateUser FROM users WHERE id = ?",
    userId,
    (err, result) => {
      if (result == "") {
        return res.status(401).json({ message: "user not found by id !" });
      }
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      return res.status(200).json(result[0]);
    }
  );
};

exports.getUserToken = (req, res, next) => {
  const userId = req.body.decodedToken.userId;
  db.query(
    "SELECT username, admin, id FROM users WHERE id = ?",
    userId,
    (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      return res.status(200).json(result);
    }
  );
};

exports.autoLogin = (req, res, next) => {
  return res.status(200).json("Welcome 🙌 Welcome 🙌 ");
};
