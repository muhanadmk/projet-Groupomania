
const express = require('express');
const route = express.Router();
const CommentCtlr = require('../controllers/comment');
const {auth} = require('../middleware/auth');


route.route('/Comment/:id').get(CommentCtlr.getAllComments);
route.route('/').post(auth, CommentCtlr.writeComment);
route.route('/deleteComment/:id/:User').delete(auth, CommentCtlr.deleteComment);
route.route('/AdminDeleteComment/:id/:idAdmin').delete(auth ,CommentCtlr.AdminDeleteComment);


module.exports = route