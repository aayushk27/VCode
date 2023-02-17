const { check } = require( 'express-validator' );
const { validationResult } = require('express-validator');

exports.validateSignupRequest = [
    check('firstName')
    .notEmpty()
    .withMessage('firstName is required'),

    check('lastName')
    .notEmpty()
    .withMessage('lastName is required'),
    
    check('email')
    .isEmail()
    .withMessage('valid Email is required'),
    
    check('password')
    .isLength( { min : 2 } )
    .withMessage('Password lenght of more then 2 required'),
    
];

exports.validateSigninRequest = [
    check('email')
    .isEmail()
    .withMessage('valid Email is required'),
    
    check('password')
    .isLength( { min : 2 } )
    .withMessage('Password lenght of more then 2 required'),
    
];



exports.isRequestValidated = ( req, res , next) => {
    const errors = validationResult(req);
    if (errors.array().length > 0) {
        return res.status(400).json({ error : errors.array()[0].msg });
        
    }

    next(); 
}
