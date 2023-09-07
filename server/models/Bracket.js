const { Schema, model } = require('mongoose');

const bracketSchema = new Schema(
  {
    questionTitle: {
      ref: 'Idea',
      type: Schema.Types.String
    },

    ideas: [{
      ref: 'Idea',
      type: Schema.Types.Object
    }],

    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => {
        if (date) return date.toISOString().split("T")[0];
      }
    },

    username: {
      type: String,
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