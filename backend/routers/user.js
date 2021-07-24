const express = require('express');
const router = express.Router();
userCtlr = require('../controllers/user');


router.post('/signup', userCtlr.signup);
router.post('/login', userCtlr.login);
router.delete('/', userCtlr.deleteUser);




module.exports = router