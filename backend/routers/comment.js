const express = require('express');
const router = express.Router();
const CommentCtlr = require('../controllers/comment');

router.post('/writeComment', CommentCtlr.writeComment);
// router.delete('/deleteComment/:id', CommentCtlr.deleteComment);
// router.put('/modifierComment/:id', CommentCtlr.modifierComment);




module.exports = router