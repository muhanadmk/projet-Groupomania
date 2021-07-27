const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
userCtlr = require('../controllers/user');

router.post('/signup',userCtlr.signup);
router.post('/login', userCtlr.login);
router.delete('/:id',auth ,userCtlr.deleteUser);
router.get('/:id',userCtlr.getUnUser);
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjksImlhdCI6MTYyNzM3ODcwNiwiZXhwIjoxNjI3NDY1MTA2fQ.5r_umh7u6w8JpLloP4ysI6f_2Y4bezLmqEC7crfxCUQ



module.exports = router