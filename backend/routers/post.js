const express = require('express');
const router = express.Router();
const postCtlr = require('../controllers/post');
const multer = require('../middleware/multer-config');


router.post('/writePost', multer, postCtlr.writePost);
router.delete('/deletePost/:id', postCtlr.deletePost);
router.put('/modifierPost/:id', postCtlr.modifierPost);
router.get('/getAllpsot',multer , postCtlr.getAllpsot);
router.get('/getOnePsot/:id', postCtlr.getOnePsot);


module.exports = router