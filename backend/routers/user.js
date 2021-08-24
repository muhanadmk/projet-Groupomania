const express = require('express');
const route = express.Router();
const {auth} = require('../middleware/auth');
const userCtlr = require('../controllers/user');

route.route('/auth').get(auth , userCtlr.autoLogin);
route.route('/signup').post(userCtlr.signup);
route.route('/login').post(userCtlr.login);
route.route('/:id').delete(auth ,userCtlr.deleteUser);
route.route('/:AdminID/:id').delete(auth ,userCtlr.AdminDeleteUser);
route.route('/profile/:id').get(userCtlr.getUser);
route.route('/user').get(auth ,userCtlr.getUserToken);


module.exports = route;