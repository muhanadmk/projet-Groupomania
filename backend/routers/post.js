const express = require('express');
const router = express.Router();
const postControllers = require('../controllers/post')
const multer = require('../middleware/multer-config');


router.post('/', multer, postControllers.writePost);
router.delete('/:id',multer, postControllers.deletePost);
router.put('/:id', multer, postControllers.modifierPost);
router.get('/:id', postControllers.getProfileEtPosts);
router.get('/', postControllers.getAllPsot);
router.delete('/AdminDeletePost/:id' ,postControllers.AdminDeletePost);




module.exports = router