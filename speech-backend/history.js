const express = require('express');
const app = express.Router();
const connection = require('./connection')


app.get('/history/:mail',(req,res)=>{
    const mail = req.params.mail
    const query = "SELECT *from results where user_email ='" +mail+ "' ORDER BY result_date DESC LIMIT 10";
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
  