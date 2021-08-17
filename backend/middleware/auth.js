const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const authorization = req.headers['authorization'];
    const token = authorization.split(' ')[1]
    if (token == null) {
     res.status(401).json({ message: "err in token is null !" })
    }
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY_JWT)
    const userId = decodedToken.userId;
    const reqUserId = req.body.userId;
    console.log(userId);
    console.log("reqUserId", reqUserId);
    if (reqUserId && reqUserId !== userId) {
      // const deleteDataStorge =  () => {
      // localStorage.removeItem('token');
      // localStorage.removeItem('userId');
      // localStorage.removeItem('admin');
      // localStorage.removeItem('ProfileUserId');
      // }
      // deleteDataStorge();
     res.status(401).json({ message: "user not authorization !" })
    }
     next()
  }
  catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    })
  }
};
