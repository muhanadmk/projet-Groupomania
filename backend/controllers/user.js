const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const db = require("../db_conextion/db_conextion");
const dotenv = require("dotenv").config();

exports.signup = (req, res, next) => {
  const secret = process.env.HASHE_EMAIl;
  const hashEmail = crypto
    .createHmac("sha256", secret)
    .update(req.body.email)
    .digest("hex");
  bcrypt.hash(req.body.password, 10).then((hashPassword) => {
    const user = {
      username: req.body.username,
      email: hashEmail,
      password: hashPassword,
    };
    db.query("INSERT INTO users SET ?", user, (err, result) => {
      if (err) {
        throw err;
      }
      res.status(201).json({ message: "Utilisateur créé !" });
    });
  });
};

exports.login = (req, res, next) => {
  const ReqEmail = req.body.email;
  const secret = process.env.HASHE_EMAIl;
  const hashEmail = crypto
    .createHmac("sha256", secret)
    .update(req.body.email)
    .digest("hex");
  const email = hashEmail;
  const password = req.body.password;
  let sql = `SELECT * FROM users WHERE email = ?`;
  db.query(sql, email, (err, users) => {
    if (err) throw err;
    if (!hashEmail === ReqEmail) {
      return res.status(401).json({ error: "Utilisateur non trouvé !" });
    }
    const user = users[0];
    // console.log(user.id);
    bcrypt
      .compare(password, user.password)
      .then((valid) => {
        if (!valid) {
          return res.status(401).json({ error: "Mot de passe incorrect !" });
        }
        res.status(200).json({
          userId: user.id,
          token: jwt.sign({ userId: user.id }, process.env.SECRET_KEY_JWT, {
            expiresIn: "24h",
          }),
        });
      })
      .catch((error) => res.status(500).json({ error }));
  });
};


exports.deleteUser = (req, res, next) => {
  const userId = req.params.id;
  db.query("SELECT id FROM users WHERE id = ?", userId, (err, result) => {
    if (err) {
      throw err;
    }
    if  (result[0] && userId == result[0].id) {
      db.query("DELETE FROM users WHERE id = ?", userId, (err, result) => {
        if (err) throw err;
        res.status(200).json({ message: "Utilisateur supprimé !" });
      });
    }
    else{
      res.status(401).json({ message: "Identifiant invalide !" });
    } 
  });
};

exports.getUser = (req, res, next) => {
  // const userId = req.body.userId;
  db.query("SELECT id FROM users", (err, result) => {
    if (err) {
      throw err;
    }
    else if (req.params.userId === result[0].id)
    db.query('SELECT * FROM users WHERE id = ?', req.params.userId, function (err, result, field) {
      if (err) throw err;
      res.status(200).json({ message: 'Utilisateur trouve !' })
    });
  });
};
