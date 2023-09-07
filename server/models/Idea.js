const { Schema, model } = require('mongoose');

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

    votes: [{
      type: Schema.Types.ObjectId
    }],

  },
  {
    timestamps: true,
    toJSON: { getters: true, virtuals: true }
  }
);

ideaSchema.virtual('voteCount').get(function() {
  // return an object with roundNums and voteCounts
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