const router = require('express').Router();

// Import any controllers needed here
const { register, login, verify } = require('../../controllers/auth.controller');

router.post("/register", async (req, res) => {
  try {
    const { token, user } = await register(req)
    res.cookie("auth-cookie", token).json({ status: "success", payload: user })
  } catch(err){
    res.status(500).json({ status: "error" })
  }
})

router.post("/login", async(req, res) => {
  try {
    const { token, user } = await login(req)
    res.cookie("auth-cookie", token).json({ status: "success", payload: user })
  } catch(err){
    res.status(500).json({ status: "error" })
  }
})

router.post("/verify", async (req, res) => {
  try {
    const { user } = await verify(req)
    res.json({ status: "success", payload: user })
  } catch(err){
    res.status(500).json({ status: "error" })
  }
})

router.post("/logout", (req, res) => {
  // Here, you should perform the logout logic.
  // This might involve clearing the user's session or token.
  // After logging out, you can remove the authentication cookie.

  // For example, if you're using cookies for authentication, you can clear the cookie:
  res.clearCookie("auth-cookie");

  res.json({ status: "success", message: "Logged out successfully" });
});

module.exports = router;
