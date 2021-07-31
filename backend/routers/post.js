const express = require('express');
const router = express.Router();
const postCtlr = require('../controllers/post');
const multer = require('../middleware/multer-config');


router.post('/', multer, postCtlr.writePost);
router.delete('/:id', postCtlr.deletePost);
router.put('/:id', postCtlr.modifierPost);
router.get('/:id', postCtlr.getOnePsotByUserId);
router.get('/', postCtlr.getAllPsot);
router.delete('/AdminDeletePost/:id' ,postCtlr.AdminDeletePost);




module.exports = router