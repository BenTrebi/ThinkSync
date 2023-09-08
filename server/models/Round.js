const { Schema, model } = require('mongoose');


const roundSchema = new Schema(
  {   
    roundNum: {
      type: Number
    },

    ideaId: [{
      type: Schema.Types.ObjectId,
      required: true
    }],

  },
  {
    timestamps: true,
    toJSON: { getters: true, virtuals: true }
  }
);

// not going to have a separate table for this, will be stored in Vote
// const Round = model('Round', roundSchema);
// module.exports = Round;

module.exports = roundSchema;