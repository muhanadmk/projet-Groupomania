const express = require('express');
const router = express.Router();
const postControllers = require('../controllers/post');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

router.post('/', auth, multer, postControllers.writePost);
router.delete('/:id',auth ,multer, postControllers.deletePost);
router.put('/:id',auth, multer, postControllers.modifierPost);
router.get('/profile/:id', postControllers.getProfileEtPosts);
router.get('/', postControllers.getAllPsot);
router.delete('/AdminDeletePost/:id',auth ,multer ,postControllers.AdminDeletePost);




module.exports = router;