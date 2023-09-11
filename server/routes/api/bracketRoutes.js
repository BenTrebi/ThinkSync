const router = require('express').Router();
const { Idea, Bracket, User } = require('../../models/index')


//add vote to an idea AND add a route to a vote
router.post("/vote", async (req, res) => {
  try {
    const vote = req.body;
    console.log(`this is vote ${vote}`);

    let updateIdeaVotes = [];

    for (let vote of vote) {
      updateIdeaVotes.push(await Idea.findOneAndUpdate(
        { _id: vote.ideaId },
        { $addToSet: { votes: vote } },
        { runValidators: true, new: true }
      ))
    }

    return res.status(200).json(
      updateIdeaVotes
    )
  } catch (err) {
    console.log(err)
  }

});

//need to make route for get all for idea history component by userid
// router.get('/history/:userId'), async (req,res) =>{
//   const allBrackets, 
// }


//to populate the sync rounds get bracket and idea objects BY bracket id
router.get('/:id', async (req, res) => {
  try {
    const firstBracket = await Bracket.findById(req.params.id
    )

    let ideaList = firstBracket.ideas
    console.log(ideaList)

    const firstBracketIdeas = await Idea.find({
      '_id': {
        $in: ideaList
      }
    })

    console.log(firstBracketIdeas)

    res.json({ bracket: firstBracket, ideas: firstBracketIdeas })
  } catch (err) {
    console.log(err)
  }
})

module.exports = router;

/*
https://stackoverflow.com/questions/8303900/mongodb-mongoose-findmany-find-all-documents-with-ids-listed-in-array

*/