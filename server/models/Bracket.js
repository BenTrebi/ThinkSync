const { Schema, model } = require('mongoose');

const bracketSchema = new Schema(
  {
    questionTitle: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 500
    },

    ideas: [{
      ref: 'Idea',
      type: Schema.Types.ObjectId
    }],

    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => {
        if (date) return date.toISOString().split("T")[0];
      }
    },

    userId: {
      type: Schema.Types.ObjectId,
      required: true
    },

  },
  {
    timestamps: true,
    toJSON: { getters: true, virtuals: true }
  }
);


const Bracket = model('Bracket', bracketSchema);
module.exports = Bracket;

/*
references


*/