const router = require('express').Router();
const { Idea, Bracket, User } = require('../../models/index')
const voteSchema = require('../../models/Vote')

// create new ideas and bracket from 
router.post("/", async (req, res) => {
  try {
    const newBracket = await Bracket.create(req.body.bracket)
    // console.log(newBracket)
    // console.log(req.body.bracket)
    console.log(newBracket._id)
    const nbid = newBracket._id
    console.log(nbid)
   
    // could we just save the newbracketID to the ideas instead of saving an array of the ideas in the bracket??
    // const newIdea = await Idea.create(req.body.ideers,{bracketId:nbid})
    const newIdea = await Idea.create(req.body.ideers)
    console.log(`how to I access the newIdea._id's for each idea? ${newIdea._id}`)
    // console.log(req.body.ideers)
    console.log(newIdea)
    console.log(newIdea[0]._id)

/// need HELP to make this update with each newIdea._id  it works with new bracket.id, but newIdea._id is underfined... do I need to save the ids to a separate array or something?
    const addIdea = await Bracket.findOneAndUpdate(
      { _id: newBracket._id},
      { $addToSet: { ideas: newBracket._id } },  //need to pass in idea._id here
      { runValidators: true, new: true }
    );

    //add bracket to user? would have to update model to include a brackets array
    // const addBracket = await User.findOneAndUpdate(
    //   { _id: newBracket.userId },
    //   { $addToSet: { brackets: newBracket._id } },
    //   { runValidators: true, new: true }
    // );

    res.status(200).json({ result1: newBracket, result2: newIdea, result3:addIdea })
  } catch (err) {
    console.log(err)
  }
});


module.exports = router;

/*
https://stackoverflow.com/questions/14959199/passing-model-parameters-into-a-mongoose-model


*/