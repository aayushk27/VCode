
const Post = require('../models/post');

exports.createPost = (req,res) => { 
    
    console.log(req.body);

    const { 
        title,
        message,
        tags
    } = req.body; 
 

    const _post = new Post({
        title,
        message,
        tags,
        creator : req.user._id 
    });  

    _post.save( ( error , data) => {

        if (error) {
            
            console.log(error);

            return res.status(400).json({
                message : "Something went wrong !"
            });
        }

        if (data) {
            console.log(data);

            return res.status(200).json({
                message : "Post created successfully !"
        
            });
        }

    });


}


exports.getPost = (req,res) => {  
    
    Post.find({})
    .exec( ( error , posts ) => {

        if (error) return res.status(400).json({ error });

        if (posts) {
            return res.status(200).json( { posts } );
        }
    });
}