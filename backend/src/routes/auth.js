const express = require('express');
const { requireSignin } = require('../common-middleware');

const { signup, signin, signout } = require('../controller/auth');
const router = express.Router(); 

const { validateSignupRequest, validateSigninRequest, isRequestValidated } = require('../validators/auth');

router.post('/signup', validateSignupRequest , isRequestValidated, signup);

router.post('/signin',validateSigninRequest , isRequestValidated,  signin ); 


router.post('/signout' , requireSignin , signout ); 

router.post('/profile' , requireSignin , (req,res) => {
    res.status(200).json({
        user : 'profile'
    });
})

module.exports = router; 
