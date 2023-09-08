const User = require("../models/User")
const jwt = require("jsonwebtoken")
require("dotenv").config()


// The user is encrypted at the model level

async function createUser(req, res){
  try {
    const user = await User.create(req.body)
    const { password, ...modifiedUser } = user._doc;


    // create the token that will be attached to the cookie
    const token = jwt.sign({
      email: user.email,
      id: user._id
    })

    res.cookie("auth-cookie", token).json({ status: "success", payload: modifiedUser})
  } catch(err){
    console.log(err.message)
    return res.status(400).json({ status: "error", msg: 'Error creating user: ${err.message}'})
  }
} 


async function authUser(req, res){

}


async function verifyUser(req, res){

}



module.exports =  {
  createUser,
  authUser,
  verifyUser
}