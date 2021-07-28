const express = require('express');
const router = express.Router();
const CommentCtlr = require('../controllers/comment');

router.post('/writeComment', CommentCtlr.writeComment);
router.put('/:id', CommentCtlr.modifierComment);
router.delete('/:id', CommentCtlr.deleteComment);





module.exports = router