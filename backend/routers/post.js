const express = require('express');
const router = express.Router();
const postCtlr = require('../controllers/post');

router.post('/writePost', postCtlr.writePost);
router.delete('/deletePost/:id', postCtlr.deletePost);
router.put('/modifierPost', postCtlr.modifierPost);




module.exports = router