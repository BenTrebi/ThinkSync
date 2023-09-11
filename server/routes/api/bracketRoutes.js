const router = require('express').Router();
const { Idea, Bracket, User } = require('../../models/index')


//add vote to an idea AND add a route to a vote
router.post("/vote", async(req,res)=>{
  try{
    const vote = req.body;
    console.log(`this is vote ${vote}`);

    let updateIdeaVotes = [];

    for(let vote of vote){
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

});

//need to make route for get all for idea history component
// router.get('/history')
//to populate the sync rounds get by bracket ID
router.get('/:id'), async(req,res)=>{
  try{
    const firstBracket = await Bracket.findbyPk(req.params.id,{
      include:[{model: Bracket},
      {model: Idea}]
    })

    res.send(firstBracket)
  }catch(err){
    console.log(err)
  }
}





module.exports = router;