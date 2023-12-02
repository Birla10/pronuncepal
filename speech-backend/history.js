const express = require('express');
const app = express.Router();
const connection = require('./connection')


app.post('/',(req,res)=>{
    const mail = req.body.mail
    const query = "SELECT * FROM results WHERE email = '" + mail +"' ORDER BY dateUpload DESC, timeUpload DESC";
    connection.query(query,(error,results,fields)=>{
      if(error){
        console.log(error)
        res.send(500)
      }
      else{
        res.send(results)
      }
    })
    
  })
  module.exports=app;