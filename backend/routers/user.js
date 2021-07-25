const express = require('express');
const router = express.Router();
userCtlr = require('../controllers/user');
auth = require('../middleware/auth')

router.post('/signup', userCtlr.signup);
router.post('/login', userCtlr.login);
router.delete('/deleteUser', auth, userCtlr.deleteUser);
router.get('/getUnUser', userCtlr.getUnUser);




module.exports = router