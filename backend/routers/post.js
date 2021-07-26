const express = require('express');
const router = express.Router();
const postCtlr = require('../controllers/post');

router.post('/writePost', postCtlr.writePost);
router.delete('/deletePost/:id', postCtlr.deletePost);
router.put('/modifierPost/:id', postCtlr.modifierPost);
router.get('/getAllpsot', postCtlr.getAllpsot);





module.exports = router