const express = require('express');
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const fs  = require('fs')
const https = require('https')
dotenv.config()
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(cors({
    origin:'*'
}))

const key = fs.readFileSync('private.key')
const cert = fs.readFileSync('certificate.crt')

const cred = {
  key,
  cert
}



const loginRoute = require('./loginRoute');
const uploadS3 = require('./uploadS3');
const analyticsLine = require('./analyticsLine');
const analyticsBar = require('./analyticsBar');
const signupRoute = require('./signupRoute');
const getScore = require('./getScore') //getting results from SOE API
const getResults = require('./getResuls') // getting results from Speechace API
const uploadData = require('./uploadData')
const healthChecks = require('./healthCheckRoute');
const history = require('./history');



app.use('/login',loginRoute)
app.use('/uploadS3',uploadS3)
app.use('/analyticsLine',analyticsLine)
app.use('/analyticsBar',analyticsBar)
app.use('/signup',signupRoute)
app.use('/score',getScore)
app.use('/getResults',getResults)
app.use('/uploadData',uploadData)
app.use('/history',history)
app.use('/',healthChecks)



app.listen(process.env.PORT,()=>{
    console.log("Listening on Port ",process.env.PORT)
})
const httpsServer = https.createServer(cred,app)
httpsServer.listen(8443)