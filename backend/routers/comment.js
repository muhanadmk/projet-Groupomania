const express = require('express');
const router = express.Router();
const CommentCtlr = require('../controllers/comment');
const auth = require('../middleware/auth');


router.get('/Comment/:id', CommentCtlr.getAllComments);
router.post('/', auth, CommentCtlr.writeComment);
router.delete('/deleteComment/:id/:User', auth, CommentCtlr.deleteComment);
router.delete('/AdminDeleteComment/:id/:idAdmin',auth ,CommentCtlr.AdminDeleteComment);


module.exports = router