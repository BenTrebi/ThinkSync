const { Schema, model } = require('mongoose');

const ideaSchema = new Schema(
  {
    ideanum: {
      type: Number,
      required: true,
    },

    ideaText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 500
    },

    questionTitle: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 500
    },
    
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => {
        if (date) return date.toISOString().split("T")[0];
      }
    },

  },
  {
    timestamps: true,
    toJSON: { getters: true, virtuals: true }
  }
);

const Idea = model('Idea', ideaSchema);
module.exports = Idea;

/*
REFERENCE
ideaText min max length
https://stackoverflow.com/questions/28829912/mongoose-schema-set-max-length-for-a-string

createdAt format
https://stackoverflow.com/questions/70724966/how-to-use-getter-or-setter-with-mongoose-timestamps

*/