const router = require('express').Router();
const { Idea, Bracket, User } = require('../../models/index')


//add vote to an idea AND add a route to a vote
router.post("/vote", async(req,res)=>{
  try{
    const puppypancakes = req.body;
    console.log(`this is puppypancakes ${puppypancakes}`);

    let updateIdeaVotes = [];

    for(let vote of puppypancakes){
        updateIdeaVotes.push(await Idea.findOneAndUpdate(
        {_id: vote.ideaId},
        { $addToSet: { votes: vote } },
        { runValidators: true, new: true }
      ))
    }

    return res.status(200).json(
    updateIdeaVotes
    )
  } catch (err){
    console.log(err)
  }

})

module.exports = router;