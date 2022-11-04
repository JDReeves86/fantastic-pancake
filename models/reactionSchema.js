const { Schema } = require("mongoose");
const formatDate = require("../helpers/formatDate");

const reactionSchema = new Schema({
  reactionID: {
    type: Schema.Types.ObjectId,
    default: new Schema.Types.ObjectId,
  },
  rectionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
    get: (date) => {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', seconds: 'numeric' }
      const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
      return formattedDate
  }}
});


module.exports = reactionSchema;