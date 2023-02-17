
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        trim : true
    },
    message : {
        type : String,
        required : true,
        trim : true
    },
    creator : { 

        type : mongoose.Schema.Types.ObjectId, ref : 'User'
    },

    createdAt: {
        type: Date,
        default: new Date()
    }
}  , { timestamps : true }  );


module.exports = mongoose.model('Post' , postSchema ); 
