const { Schema, model } = require('mongoose');
const roundSchema = require = ('./Round'); 

const voteSchema = new Schema(
  {    
    userId: {
      type: Schema.Types.ObjectId,
      required: true
    },

    ideaId: {
      type: Schema.Types.ObjectId,
      required: true
    },

    roundNum: {
      type: Number,
      required: true,
    }

  },
  {
    timestamps: true,
    toJSON: { getters: true, virtuals: true }
  }
);
// not going to have a separate table for this, will be stored in Idea
// const Vote = model('Vote', voteSchema);
//module.exports = Vote;

module.exports = voteSchema;