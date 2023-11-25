const express = require('express');
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(cors({
    origin:'*'
  }))




const loginRoute = require('./loginRoute');
const uploadS3 = require('./uploadS3');
const analyticsLine = require('./analyticsLine');
const analyticsBar = require('./analyticsBar');
const signupRoute = require('./signupRoute');
const getScore = require('./getScore') //getting results form SOE API
const getResults = require('./getResuls')




app.use('/login',loginRoute)
app.use('/uploadS3',uploadS3)
app.use('/analyticsLine',analyticsLine)
app.use('/analyticsBar',analyticsBar)
app.use('/signup',signupRoute)
app.use('/score',getScore)
app.use('/getResults',getResults)



app.listen(process.env.PORT,()=>{
    console.log("Listening on Port 8080")
})
