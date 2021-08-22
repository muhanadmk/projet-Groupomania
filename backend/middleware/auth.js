const jwt = require("jsonwebtoken");
const db = require("../db_conextion/db_conextion");
const dotenv = require("dotenv");
dotenv.config();


module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY_JWT);
    const userId = decodedToken.userId;
    let sql = `SELECT id FROM users WHERE id = ?`;
    db.query(sql, userId, (err, users) => {
      if (err) {
        res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      const user = users[0]
      if (!user) {
        res.status(401).json({ message: "user not authorization !" });
        return;
      }
        req.body.decodedToken = decodedToken;
        // return next();
    });
  }
  catch (err) {
    return res.status(401).send("Invalid Token");
  } 
  return next();
};
