const mongoose=require('mongoose');

const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
//TODO add uniqueness and email validation to email fields
 const UserSchema= mongoose.Schema({
     email:{type:String,required:true,lowercase:true,index:true},
     passwordHash:{type:String,required:true}
 },{timestamps:true})



UserSchema.methods.geterateJWT=function geterateJWT(){
      return jwt.sign({
           email:this.email
      },process.env.JWT_SECRET)
} 


UserSchema.methods.toAuthJSON=function toAuthJSON(){
     return {
          email:this.email,
          token:this.geterateJWT()
     }
} 

UserSchema.methods.isValidPassword=function isValidPassword(password){
   return bcrypt.compareSync(password,this.passwordHash);

}

const User=module.exports= mongoose.model('User',UserSchema)

