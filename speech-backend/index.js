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
const getScore = require('./getScore')


app.use('/login',loginRoute)
app.use('/score',getScore)

app.listen(process.env.PORT,()=>{
    console.log("Listening on Port 8080")
})
