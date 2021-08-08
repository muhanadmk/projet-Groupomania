const express = require('express');
const router = express.Router();
const postControllers = require('../controllers/post')
const multer = require('../middleware/multer-config');


router.post('/', postControllers.writePost);
router.delete('/:id', postControllers.deletePost);
router.put('/:id', postControllers.modifierPost);
router.get('/:id', postControllers.getProfileEtPosts);
router.get('/', postControllers.getAllPsot);
router.delete('/AdminDeletePost/:id' ,postControllers.AdminDeletePost);




module.exports = router