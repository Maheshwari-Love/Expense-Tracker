const express = require('express');
const cors = require('cors');  
const morgan = require('morgan');
const dotenv =require('dotenv');
const colors =require('colors');
const connectDb = require('./config/connectDb');

//config env
dotenv.config();

//DB Call

connectDb();


//rest object
const app = express();

//middleware
app.use(morgan('dev')); //morgan is used for logging
app.use(cors()); //cors is used for cross origin resource sharing   
app.use(express.json()); //express.json is used for parsing json data


//routes

app.get("/", (req,res) =>{
    res.send('<h1>Hello from server  jijhbh n</h1>')
})

//PORT
const PORT = process.env.PORT || 5000;

//LISTEN
    app.listen(PORT,() =>{
        console.log(`Server is running on port ${PORT}`);
    })