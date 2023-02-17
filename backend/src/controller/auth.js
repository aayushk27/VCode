const User = require('../models/user');
const jwt = require('jsonwebtoken'); 

const bcrypt =require('bcrypt');
const shortid = require('shortid');

exports.signup = (req,res) => { 
    
    console.log(req.body);

    
    User.findOne( { email : req.body.email } )
    .exec(  async  (error , user ) => { 

        if (user) return res.status(400).json({
            message : "User already registered !"
        });
        
        const { 
            firstName,
            lastName,
            email,
            password 
        } = req.body; 


        const hash_password = await bcrypt.hash(password , 10 );

        const _user = new User({
            firstName,
            lastName,
            email,
            hash_password,
            userName : shortid.generate()   
        }); 

        _user.save( ( error , data) => {

            if (error) {
                
                console.log(error);

                return res.status(400).json({
                    message : "Something went wrong !"
                });
            }

            if (data) {
                console.log(data);

                return res.status(200).json({
                    message : "User created successfully !"
            
                });
            }

        });


    });

}

exports.signin = (req,res) => {


    User.findOne( { email : req.body.email } )
    .exec( async  ( error , user ) => { 

        if (error) return res.status(400).json({ error });

        if (user) {
            
            const userPromise = await user.authenticate(req.body.password);
            
            if (userPromise) { 
                const token = jwt.sign( { _id : user._id , firstName : user.firstName , lastName : user.lastName ,  email : user.email  , fullName : user.fullName ,  role : user.role  } , process.env.JWT_SECRET , { expiresIn : '1h' } ); // first payload   // second private key 
                

                const { _id , firstName , lastName , email , role , fullName }  = user; 

                res.cookie('token' , token , {expiresIn : '1h'} ); 
                res.status(200).json({
                    token,
                    user : {
                        _id , firstName , lastName , email , role , fullName
                    }
                });
            }   
            else {
                return res.status(400).json({ message : 'Invalid Password !' });
            }

        }
        else {
            return res.status(400).json({ message : 'Something went wrong 1!' });
        }
    })
}

exports.signout = (req,res) => {
    res.clearCookie('token');
    res.status(200).json({
        message : 'Signout Successfully !!'
    })
}
