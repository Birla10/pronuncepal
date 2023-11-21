const express = require('express');
const app = express()
const dotenv=require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')
app.use(bodyParser.json());



const loginRoute = require('./loginRoute'); 
const signupRoute = require('./signupRoute');


app.use('/login',loginRoute)
app.use('/signup',signupRoute)

app.listen(process.env.PORT,()=>{
    console.log("Listening on Port 8080")
})
