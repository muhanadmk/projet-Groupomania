const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY_JWT);
    const userId = decodedToken.userId;
    console.log(userId);
    console.log("req.body.userId", req.body.userId);
    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user ID";
    }
    else {
      req.body.decodedToken = decodedToken;
      next();
    }
  }
  catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
   
};
