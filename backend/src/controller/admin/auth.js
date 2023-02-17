const User = require('../../models/user');
const jwt = require('jsonwebtoken'); 

exports.signup = (req, res) => { 

    console.log(req.body);

    User.findOne({ email: req.body.email })
        .exec(async (error, user) => {

            if (user) return res.status(400).json({
                message: "Admin already registered !"
            });

            const {
                firstName,
                lastName,
                email,
                password
            } = req.body; 

            const hash_password = await bcrypt.hash(password, 10);


            const _user = new User({
                firstName,
                lastName,
                email,
                hash_password,
                userName: shortid.generate(),
                role: 'admin' 
            }); 

            _user.save((error, data) => {

                if (error) {

                    console.log(error);

                    return res.status(400).json({
                        message: "Something went wrong !"
                    });
                }

                if (data) {
                    console.log(data);

                    return res.status(201).json({
                        message: "Admin created successfully !"
                    });
                }

            });


        });

}

exports.signin = (req, res) => {


    User.findOne({ email: req.body.email })
        .exec(  async (error, user) => { 

            if (error) return res.status(400).json({ error });

            if (user) {

                const userPromise = await user.authenticate(req.body.password);
                if (userPromise) { 

                    const token = jwt.sign({ _id: user._id, firstName: user.firstName, lastName: user.lastName, email: user.email, fullName: user.fullName, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' }); 
                    
                    const { _id, firstName, lastName, email, role, fullName } = user; 
                    res.status(200).json({
                        token,
                        user: {
                            _id, firstName, lastName, email, role, fullName
                        }
                    });
                    
                }
                else {
                    return res.status(400).json({ message: 'Invalid Password !' });
                }

            }
            else {
                return res.status(400).json({ message: 'Something went wrong 1!' });
            }
        })
} 
