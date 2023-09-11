const { User } = require('../models');
const { create, find, findOne } = require("./user.controller")
const jwt = require("jsonwebtoken");


function signToken(user) {
  return jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET)
}

async function register(req) {
  // console.log("HELP!!!!!")
  let user
  // use the create method on the User controller to first create the user
  try {
    user = await create(req.body)

  } catch (err) {
    // if( process.env.NODE_ENV === "development")
    throw err
  }

  const token = signToken(user)

  const { password, ...modifiedUser } = user._doc;
  return { status: "success", token, user: modifiedUser }
}

async function verify(req) {
  const cookie = req.cookies["auth-cookie"]

  console.log(`Cookie ${cookie}`);


  if (!cookie) return { status: "error", msg: "unauthorized" }

  const decryptCookie = jwt.verify(cookie, process.env.JWT_SECRET)
  if (!decryptCookie) return { status: "error", msg: "unauthorized" }

  // use the findOne method on the user controller to look up the user by the id returned from verifying the token
  let foundUser = await findOne(req.body);
  if (!foundUser) return { status: "error", msg: "unauthorized" }

  return { status: "success", user: foundUser }
}

async function login(req) {
  let user;

  try {
    user = await User.findOne({ username: req.body.username }); // Assuming you have a method like findOne
  } catch (err) {
    console.error(err);
    return { status: "error", msg: "could not authenticate" };
  }

  if (!user) return { status: "error", msg: "could not authenticate" }

  const passwordIsValid = await user.verify(req.body.password);

  if (!passwordIsValid) return { status: "error", msg: "could not authenticate" }

  const token = signToken(user);

  const { password, ...modifiedUser } = user._doc;
  return { status: "success", token, user: modifiedUser }
}

module.exports = {
  register,
  login,
  verify
}