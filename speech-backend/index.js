const express = require('express');
const app = express()
const dotenv=require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')
app.use(bodyParser.json());



const loginRoute = require('./loginRoute');
const uploadS3 = require('./uploadS3');



app.use('/login',loginRoute)
app.use('/uploadS3',uploadS3)
app.listen(process.env.PORT,()=>{
    console.log("Listening on Port 8080")
})
