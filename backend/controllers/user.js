const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const db = require('../db_conextion/db_conextion');
const dotenv = require('dotenv').config();


exports.signup = (req, res, next) => {
  const secret = process.env.HASHE_EMAIl;
  const hashEmail = crypto.createHmac('sha256', secret)
    .update(req.body.email)
    .digest('hex');
  bcrypt.hash(req.body.password, 10)
    .then(hashPassword => {
      const user = {
        username: req.body.username,
        email: hashEmail,
        password: hashPassword,
      }
      db.query('INSERT INTO users SET ?', user, (err, result) => {
        if (err) {
          throw err;
        }
        res.status(201).json({ message: 'Utilisateur créé !' });
      });
    });
};

exports.login = (req, res, next) => {
  const ReqEmail = req.body.email;
  const secret = process.env.HASHE_EMAIl;
  const hashEmail = crypto.createHmac('sha256', secret)
    .update(req.body.email)
    .digest('hex');
  const email = hashEmail;
  const password = req.body.password;
  let sql = `SELECT * FROM users WHERE email = ?`;
  db.query(sql, email, (err, users) => {
    if (err) throw err;
    if (!hashEmail === ReqEmail) {
      return res.status(401).json({ error: 'Utilisateur non trouvé !' });
    }
    const user = users[0];
    // console.log(user.id);
    bcrypt.compare(password, user.password)
      .then(valid => {
        if (!valid) {
          return res.status(401).json({ error: 'Mot de passe incorrect !' });
        }
        res.status(200).json({
          userId: user.id,
          token: jwt.sign(
            { userId: user.id },
            process.env.SECRET_KEY_JWT,
            { expiresIn: '24h' }
          )
        })
      })
      .catch(error => res.status(500).json({ error }));
  })
};


exports.deleteUser = (req, res, next) => {
  try {
    if (req.body.decodedToken && req.body.decodedToken.userId !== users.id) {
      throw 'Identifiant invalide';
    } else {
      db.query('DELETE FROM users WHERE id = ?', userId, function (err, result, field) {
        if (err) throw err;
        res.status(200).json({ message: 'Utilisateur supprimé !' })
      });
    }
  } catch {
    res.status(401).json({ err: new Error('Requête invalide') });
  }
};

exports.getUnUser = (req, res, next) => {
  db.query('SELECT id FROM users',  (err, result, field) => {
    console.log(result[0].id);
    if (err) {
      throw err;
    }  
    
    else (req.body.userId === result[0].id)
    console.log(req.body.userId);
    // console.log(result[0].id);
    db.query('SELECT * FROM users WHERE id = ?', req.body.userId, function (err, result, field) {
      if (err) throw err;
      res.status(200).json({ message: 'Utilisateur trouve !' })
    });
  });
};










// {
//   const userId = 10;
//   db.query('DELETE FROM user WHERE id = ?',userId, (err, result) =>{
//     if (err) throw err;
//     res.status(200).json({ message: 'Utilisateur supprimé !'})
//   });
//   res.status(401).json({ err: new Error('Requête invalide')});
// };
  // .then(hashPassword => {
  // const = user {
  //   id : req.body.id,
  //   username : req.body.username,
  //   email: hashEmail,
  //   password: hashPassword,
  // };

  // db.query('INSERT INTO user SET ?', user, (err, result) => {
  //     if(err) throw err;
  //     console.log(result);
  //     res.send('user table created...');
  // });
  // };

  // bcrypt.hash(req.body.password, 10)
  //           .then(hash => {
  //               const record = {
  //                   lastname: req.body.lastname,
  //                   firstname: req.body.firstname,
  //                   email: req.body.email,
  //                   password: hash,
  //           }
  //       connection.query('INSERT INTO user SET ?', record, function(err, result, field) {
  //           if (err) throw err;
  //               res.status(201).json({ message: 'Utilisateur créé !'});
  //           });
  //       });
  //   };



// CREATE TABLE IF NOT EXISTS `groupomania`.`posts` ( `post_id` INT(11) NOT NULL AUTO_INCREMENT , 
//                                     `user_id` INT(11) NOT NULL , 
//                                      `description` VARCHAR(255) NOT NULL ,
//                                     `Comment` VARCHAR(255),
//                                     `like` INT(100) NOT NULL ,  
//                                     PRIMARY KEY (`post_id`),
//                                     FOREIGN KEY (post_id) REFERENCES users(id),
//                                     FOREIGN KEY (like) REFERENCES likes(id),
//                                     FOREIGN KEY (Comment) REFERENCES Comments(id)
//                                    ) ENGINE = InnoDB;


// CREATE TABLE `groupomania`.`likes` ( `like_id` INT(11) NOT NULL AUTO_INCREMENT , `number_like` INT(100) NOT NULL , PRIMARY KEY (`like_id`)) ENGINE = InnoDB;

// CREATE TABLE `groupomania`.`comments` ( `Comment_id` INT(11) NOT NULL AUTO_INCREMENT , `Comment` VARCHAR(255) NOT NULL , PRIMARY KEY (`Comment_id`)) ENGINE = InnoDB;

// (req, res, next) => {
  // const secret = process.env.HASHE_EMAIl;
  // const hashEmail = crypto.createHmac('sha256',secret)
	// 			   .update(req.body.email)
	// 			   .digest('hex');
  // User.findOne({ email: hashEmail })
  //   .then(user => {
  //     if (!user) {
  //       return res.status(401).json({ error: 'Utilisateur non trouvé !' });
  //     }
  //     bcrypt.compare(req.body.password, user.password)
  //       .then(valid => {
  //         if (!valid) {
  //           return res.status(401).json({ error: 'Mot de passe incorrect !' });
  //         }
  //         res.status(200).json({
  //           userId: user._id,
  //           token: jwt.sign(
  //             { userId: user._id },
  //             process.env.SECRET_KEY_JWT,
  //             { expiresIn: '24h' }
  //           )
  //         });
  //       })
  //       .catch(error => res.status(500).json({ error }));
  //   })
  //   .catch(error => res.status(500).json({ error }));
// };

//{
//  const secret = process.env.HASHE_EMAIl;
//   const hashEmail = crypto.createHmac('sha256',secret)
// 				   .update(req.body.email)
// 				   .digest('hex');
//   bcrypt.hash(req.body.password, 10)
//     .then(hash => {
//       const user = new User({
//         email: hashEmail,
//         password: hash
//       });
//       user.save()
//         .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
//         .catch(error => res.status(400).json({ error }));
//     })
//     .catch(error => res.status(500).json({ error }));
// };

