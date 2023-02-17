const express = require('express');
const app = express();
const mongoose = require('mongoose');

const cors = require('cors');

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth'); // #C8
const postRoutes = require('./routes/post'); // #C8


const env = require('dotenv');

env.config();

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.vwseq.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`

).then(() => {
    console.log('Database connected !!');
});

app.use(cors()); 

app.use(express.json()); 


app.use('/api' , authRoutes);  
 
app.use('/api' , adminRoutes); 

app.use('/api' , postRoutes); 

app.listen(process.env.PORT , () => {
    console.log(`Server is running on Port ${process.env.PORT}`);
});

