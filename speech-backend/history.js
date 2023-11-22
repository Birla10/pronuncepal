app.get('/history/:mail',(req,res)=>{
  const mail = req.params.mail
  const query = "SELECT * FROM results WHERE mail = '" + mail +"' ORDER BY uploadDate DESC, uploadTime DESC";
  connection.query(query,(error,results,fields)=>{
    if(error){
      console.log(error)
    }
    else{
      res.send(results)
    }
  })
  
})