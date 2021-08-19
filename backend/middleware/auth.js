const jwt = require("jsonwebtoken");
const db = require("../db_conextion/db_conextion");


module.exports = (req, res, next) => {
  try {
    const authorization = req.headers["authorization"];
    const token = authorization.split(" ")[1];
    if (token == null) {
      res.status(401).json({ message: "err in token is null !" });
    }
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY_JWT);
    const userId = decodedToken.userId;
    let sql = `SELECT id FROM users WHERE id = ?`;
    db.query(sql, userId, (err, users) => {
      if (err) {
        res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      const user = users[0];
      if (user) {
        req.body.decodedToken = decodedToken;
        next();
        return;
      } else {
        res.status(401).json({ message: "user not authorization !" });
        return;
      }
    });
  } catch {
    res.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};
