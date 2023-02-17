
const jwt = require('jsonwebtoken'); 


exports.requireSignin = ( req , res , next ) => {

    console.log(req.body);
    console.log(req.headers);

    if (req.headers.authorization) {
        
        const token = req.headers.authorization.split(' ')[1];

        console.log(token);
        
        const user = jwt.verify(token , process.env.JWT_SECRET ); 
        
        req.user = user; 

        console.log(req.user);

    }
    else {
        return res.status(400).json( { message : "user login/token required !" } );
    }

    next();

} 

exports.userMiddleware = (req,res,next) => {
    if (req.user.role !== 'user') {
        return res.status(400).json( { message : "user login required !" } );
    }
    next();
}

exports.adminMiddleware = (req,res,next) => {
    if (req.user.role !== 'admin') {
        return res.status(400).json( { message : "admin login required !" } );
    }
    next();
}