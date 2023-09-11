const { Schema, model } = require('mongoose');
const voteSchema = require = ('./Vote');

const ideaSchema = new Schema(
  {
    ideaNum: {
      type: Number,
      required: true,
    },

    ideaText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 500
    },
    
    userId: {
      type: Schema.Types.ObjectId,
      required: true
    },

    votes: [voteSchema], //each individual vote has a round identifier

  },
  {
    timestamps: true,
    toJSON: { getters: true, virtuals: true }
  }
);

ideaSchema.virtual('voteCount').get(function() {
  // return an object with roundNums and voteCounts
  //total votes and votes by round
  return this.votes.length
})

const Idea = model('Idea', ideaSchema);
module.exports = Idea;

/*
REFERENCE
ideaText min max length
https://stackoverflow.com/questions/28829912/mongoose-schema-set-max-length-for-a-string

createdAt format
https://stackoverflow.com/questions/70724966/how-to-use-getter-or-setter-with-mongoose-timestamps

*/