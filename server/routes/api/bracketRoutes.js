const router = require('express').Router();
const { Idea, Bracket, User } = require('../../models/index')


//add vote to an idea AND add a route to a vote
router.post("/vote", async (req, res) => {
  try {
    const vote = req.body;
    console.log(`this is vote ${vote}`);
    console.log(`this is vote ${vote[0]}`);

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
router.get('/history/:userId', async (req,res) =>{
  try {
    let balloon = {userId: req.params.userId}
    console.log(`this is balloon ${balloon}`)
    const historyBracket = await Bracket.findOne(balloon
    )
    console.log(`this is historyBracket ${historyBracket}`)
    let ideaListy = historyBracket.ideas
    console.log(`this is ideaList ${ideaListy}`)

    const historyBracketIdeas = await Idea.find({
      '_id': {
        $in: ideaListy
      }
    })

    console.log(historyBracketIdeas)

    res.json({ bracket: historyBracket, ideas: historyBracketIdeas })
  } catch (err) {
    console.log(err)
  }
})


//to populate the sync rounds get bracket and idea objects BY bracket id
router.get('/:id', async (req, res) => {
  try {
    const firstBracket = await Bracket.findById(req.params.id
    )
    console.log(`this is firstBracket`)
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