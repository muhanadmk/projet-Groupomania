const db = require('../models');
const Post = db.post;
const Op = db.Sequelize.Op;

exports.findAllpost = (req, res)=>{
  Post.findAll()
        .then(posts => {
          res.json(posts)
        })
}