const express = require('express');
const router = express.Router();
userCtlr = require('../controllers/user');


router.post('/', userCtlr.signup);
router.get('/', userCtlr.login);




module.exports = router