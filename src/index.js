const express=require('express');
const path =require('path');

const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const dotenv = require('dotenv')

dotenv.config();

const app=express();

const auth =require('./routes/auth');


app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URL);

//on conenection
mongoose.connection.on('connected',()=>{
  console.log('connected to database');

});

mongoose.connection.on('error',(err)=>{
 
  if(err){
   console.log('error connecting to database '+err);
  }
})



app.use('/api/auth',auth);

/*app.post('/api/auth',(req,res)=>{
      res.status(400) .json({errors:{global:'Invalid Credentials'}}) 
});*/
app.get('/*',(req,res)=>{
   
   res.sendFile(path.join(__dirname,'index.html'))
})

app.listen(3200,()=>console.log('Rnning on localst:3200'));