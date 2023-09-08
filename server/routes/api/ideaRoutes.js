const router = require('express').Router();
const { Idea, Bracket, User } = require('../../models/index')
const voteSchema = require('../../models/Vote')

// create new ideas and bracket from 
router.post("/", async (req, res) => {
  try {
    const newBracket = await Bracket.create(req.body.bracket)
    const newIdeas = await Idea.create(req.body.ideers)

    const ideaIds = newIdeas.map(idea => idea._id)

    const updatedBracket = await Bracket.findOneAndUpdate(
      { _id: newBracket._id},
      { $addToSet: { ideas: { $each: ideaIds } } },  //need to pass in idea._id here
      { runValidators: true, new: true }
    );

    //add bracket to user? would have to update model to include a brackets array
    // const addBracket = await User.findOneAndUpdate(
    //   { _id: newBracket.userId },
    //   { $addToSet: { brackets: newBracket._id } },
    //   { runValidators: true, new: true }
    // );
      console.log({ bracket: updatedBracket, ideas: newIdeas })
    res.status(200).json({ bracket: updatedBracket, ideas: newIdeas })
  } catch (err) {
    console.log(err)
  }
});


module.exports = router;

/*
https://stackoverflow.com/questions/14959199/passing-model-parameters-into-a-mongoose-model


*/