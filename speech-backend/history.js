const express = require('express');
const app = express.Router();
const connection = require('./connection')


app.get('/history/:mail',(req,res)=>{
    const mail = req.params.mail
    const query = "SELECT * FROM appdata WHERE mail = '" + mail +"' ORDER BY uploadDate DESC, uploadTime DESC";
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
  