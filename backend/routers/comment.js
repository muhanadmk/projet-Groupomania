const express = require('express');
const router = express.Router();
const CommentCtlr = require('../controllers/comment');

router.get('/', CommentCtlr.getAllComments);
router.post('/newComment', CommentCtlr.writeComment);
router.put('/:id', CommentCtlr.modifierComment);
router.delete('/deleteComment/:id', CommentCtlr.deleteComment);
router.delete('/AdminDeleteComment/:id', CommentCtlr.AdminDeleteComment);




module.exports = router