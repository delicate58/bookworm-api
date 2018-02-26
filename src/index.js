const express=require('express');
const path =require('path')
const app=express();


app.post('/api/auth',(req,res)=>{
      res.status(400) .json({errors:{global:'Invalid Credentials'}}) 
});
app.get('/*',(req,res)=>{
   
   res.sendFile(path.join(__dirname,'index.html'))
})

app.listen(3200,()=>console.log('Rnning on localst:3200'));