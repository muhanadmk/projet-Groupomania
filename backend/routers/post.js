const express = require('express');
const router = express.Router();
const postCtlr = require('../controllers/post');

router.post('/sendpost', postCtlr.writePost);


module.exports = router