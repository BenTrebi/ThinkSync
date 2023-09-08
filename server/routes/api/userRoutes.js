const router = require('express').Router();
const { User } = require('../../models')

// Import any controllers needed here
// const { createUser, authUser, verifyUser } = require('../../controllers/userController');

// Declare the routes that point to the controllers above
// router.route('/').post(createUser);
// router.route('/auth').post(authUser);
// router.route('/verify').post(verifyUser);

//get all users 
router.get("/", async(req,res)=>{
  console.log('the get route was accessed')
  try{
    const result = await User.find({});
    res.status(200).json(result)
  } catch (err){
    console.log(err)
  }
})

//post new user
router.post("/", async(req, res)=> {
  console.log("got this far")
  try{
    const newUser = await User.create(req.body)
    console.log(newUser)
    res.status(200).json({result:newUser})
  } catch(err){
    console.log(err)
  }
});

//update user
router.put("/:id", async (req, res) => {
  console.log(req.body)
  try {
    const update = await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      },
      { new: true }
    )
    res.status(200).json({ result: update })
  } catch (err) {
    console.log(err)
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const update = await User.findOneAndDelete({ _id: req.params.id })

    if (!update) {
      res.status(404).json({ message: 'No user with that ID' });
    }
    // await Thought.deleteMany({ username: { $in: update.username } });
    // res.json({ message: 'User and thoughts deleted!' });
    res.json({message: 'User deleted'})
  } catch (err) {
    console.log(err)
  }
});


module.exports = router;