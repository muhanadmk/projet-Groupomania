const express = require('express');
const router = express.Router();
const CommentCtlr = require('../controllers/comment');

router.post('/writeComments', CommentCtlr.writeComments);
router.delete('/deleteComments/:id', CommentCtlr.deleteComments);
router.put('/modifierComments/:id', CommentCtlr.modifierComments);




module.exports = router