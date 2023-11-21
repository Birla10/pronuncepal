const express = require('express');
const app = express.Router();
const connection = require('./connection')
app.post("/",(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username;
    const queryCheck = "SELECT * FROM users WHERE email like '" + email + "'";
    connection.query(queryCheck,(error,results,fields)=>{
        if(error){
            console.log(error)
            res.send(404)
        }
        else if(results[0]){
            console.log("User Already in Database")
            res.send({"Status" :"User already Found"})
        }
    })
    console.log("helooooo")
    const query = "INSERT INTO users (name,email,password) VALUES ('" + username + "','" + email + "','" + password + "')";
    connection.query(query,(error,results,fields)=>{
        if(error){
            console.log("helooooo")
            res.sendStatus(404);
        }
            console.log("Data Inserted Successfully.");
            res.send({"Status" :"User Registration Successful"})
        
    })
})

module.exports = app;