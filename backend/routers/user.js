const express = require('express');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const router = express.Router();
const userCtlr = require('../controllers/user');


router.post('/signup', userCtlr.signup);
router.post('/login' ,userCtlr.login);
router.delete('/:id',auth ,userCtlr.deleteUser);
router.delete('/admin/:id',auth ,userCtlr.AdminDeleteUser);
router.get('/:id',userCtlr.getUser);



module.exports = router;