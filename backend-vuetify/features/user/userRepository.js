const User = require("../models/userModel.js");
const bcrypt = require("bcryptjs");
const jwtToken = require ("../JwtToken/jwtToken.js");
const repObj={
  //repo for Login 
  async login(req) {
    console.log("reach")
    console.log(req.body.user_email ,req.body.password)
    const user =await User.findOne({where:{user_email : req.body.user_email} } )
  
    if(user){
        const isMatch= await bcrypt.compare(req.body.password,user.password)
        if(isMatch){
            let token= await jwtToken(user)
            await User.update({tokens:token},{where:{user_id:user.user_id}})
            return user
        }
        else{
            return ("Invalid Password")
            // console.log("Passwords are not valid")
        }
    }
    else{
           return ("Invalid Email")
        // console.log("Email is not valid")
    }

  },
}