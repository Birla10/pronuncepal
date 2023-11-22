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
        else {
            const insertQuery = "INSERT INTO users (name,email,password) VALUES ('" + username + "','" + email + "','" + password + "')";
            connection.query(insertQuery, (error, results, fields) => {
                if (error) {
                    console.log("Error Occured", error);
                    res.send(500);
                } else {
                    console.log('user inserted')
                    res.send({"Status":"User Registration Successfull"})
                }
    })
}
})
})
module.exports = app;