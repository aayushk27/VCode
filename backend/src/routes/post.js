const express = require('express');
const { requireSignin, userMiddleware } = require('../common-middleware');
const { createPost, getPost } = require('../controller/post');
const router = express.Router();

router.post('/createPost' , requireSignin , userMiddleware , createPost); 

router.get('/getPost' , getPost); 

module.exports = router; 
 