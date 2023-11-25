const connection = require('./connection')
const express = require('express');
const app = express.Router();

app.post('/',(req,res)=>{
    console.log(req.body)
    const email = req.body.email;
    const link = req.body.link;
    const score = req.body.score;
    const refText = req.body.text;
    const query = "INSERT INTO userData  VALUES ('" + email + "','" + link + "'," + score + ",'"+ refText +"',CURRENT_DATE,CURRENT_TIME )"
    console.log(query )
    connection.query(query,(error,results,fields)=>{
        if(error){
            console.log(error)
        }
        else{
            res.send({"Status":"Successs"})
        }
    })
})
module.exports = app;