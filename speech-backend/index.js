const express = require('express');
const app = express()
const dotenv=require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')
app.use(bodyParser.json());



const loginRoute = require('./loginRoute');
const analyticsLine = require('./analyticsLine');
const analyticsBar = require('./analyticsBar');



app.use('/login',loginRoute)
app.use('/analyticsLine',analyticsLine)
app.use('/analyticsBar',analyticsBar)

app.listen(process.env.PORT,()=>{
    console.log("Listening on Port 8080")
})
