const express = require('express');
const app = express.Router();
const connection = require('./connection')


app.post('/',(req,res)=>{
    const mail = req.body.email;
    const query = "SELECT score AS 'marks' FROM results WHERE email = '" + mail +"' ORDER BY dateUpload ASC, timeUpload ASC limit 5"
    connection.query(query,(error,results,fields)=>{
      if(error){
        console.log(error)
      }
      else{
        res.send(results)
      }
    })
    
  })

module.exports = app;
