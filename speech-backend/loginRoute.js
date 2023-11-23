const express = require('express');
const app = express.Router();
const connection = require('./connection')


app.post('/', async (req,res)=>{
    const email = req.body.username;
    const password = req.body.password;
    const query = "SELECT * FROM users WHERE email  = '" + email + "' AND password = '" + password + "'";
    
    connection.query(query,(error,results,fields) => {
        if(error){
            console.log("Error Occured  ",error);
        }
        if(results[0]){
            res.send({"email":email,"name":results[0].name})
        }
        else{
            res.send("Not a valid User")
        }
    })

})
module.exports = app;

