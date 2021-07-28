const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
userCtlr = require('../controllers/user');

router.post('/signup',userCtlr.signup);
router.post('/login', userCtlr.login);
router.delete('/:id',userCtlr.deleteUser);
router.get('/:id',userCtlr.getUser);



module.exports = router