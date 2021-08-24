const express = require('express');
const route = express.Router();
const postControllers = require('../controllers/post');
const multer = require('../middleware/multer-config');
const {auth} = require('../middleware/auth');

route.route('/crerte/:userId').post(auth, multer, postControllers.writePost);
route.route('/:id/:userId').delete(auth ,multer, postControllers.deletePost);
route.route('/:id').put(auth, multer, postControllers.modifierPost);
route.route('/profile/:id').get(postControllers.getPostsProfile);
route.route('/').get(postControllers.getAllPsot);
route.route('/Admin/:id/:adminId').delete(auth ,multer ,postControllers.AdminPostDelete)


module.exports = route;

