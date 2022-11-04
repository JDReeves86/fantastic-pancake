const { Schema, model } = require("mongoose");
const formatDate = require("../helpers/formatDate");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: [true, "Put down a thought, you empty headed fool"],
    trim: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: new Date(),
    unique: false,
    get: (date) => {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', seconds: 'numeric' }
      const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
      return formattedDate
    }, //might need to remove parenthesis if function fails
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [],
},
{
  toJSON: {
    getters: true
  }
});

const Thought = model("thoughts", thoughtSchema);

module.exports = Thought;
