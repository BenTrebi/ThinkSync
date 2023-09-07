const { Schema, model } = require('mongoose');

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

    roundId: {
      type: Schema.Types.ObjectId,
      required: true
    },

  },
  {
    timestamps: true,
    toJSON: { getters: true, virtuals: true }
  }
);

const Vote = model('Vote', voteSchema);
module.exports = Vote;