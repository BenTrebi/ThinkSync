const { Schema, model } = require('mongoose');

const roundSchema = new Schema(
  {   
    roundNum: {
      type: Number
    },

    ideas: [{
      type: Schema.Types.ObjectId,
      required: true
    }],

  },
  {
    timestamps: true,
    toJSON: { getters: true, virtuals: true }
  }
);

const Round = model('Round', roundSchema);
module.exports = Round;