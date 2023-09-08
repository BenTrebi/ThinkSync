const router = require('express').Router();
console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
// Import any controllers needed here
const { register, login, verify } = require('../../controllers/auth.controller');

router.post("/register", async (req, res) => {
  console.log('register route')
  const { status, token, user } = await register(req)
  res.cookie("auth-cookie", token).json({ status: "success", payload: user })
})

router.post("/login", async(req, res) => {
  const { status, token, user } = await login(req)
  res.cookie("auth-cookie", token).json({ status: "success", payload: user })
})

router.post("/verify", async (req, res) => {
  const { status, user } = await verify(req)
  res.json({ status: "success", payload: user })
})

module.exports = router;
