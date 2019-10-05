var express = require('express');
const cors = require('cors')
const mongoose =  require('mongoose')

require('dotenv').config();

var app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('MongoDB database connection established successfully!')
})
// app.use('/',(req,res)=>{
//     res.send('Home');
// });

const userRouter = require('./routes/user.router.js')
app.use('/users',userRouter);


app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
})