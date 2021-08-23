const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const userCtlr = require('../controllers/user');

router.get('/auth',auth , userCtlr.autoLogin);
router.post('/signup', userCtlr.signup);
router.post('/login' ,userCtlr.login);
router.delete('/:id',auth ,userCtlr.deleteUser);
router.delete('/:AdminID/:id',auth ,userCtlr.AdminDeleteUser);
router.get('/profile/:id',userCtlr.getUser);


module.exports = router;