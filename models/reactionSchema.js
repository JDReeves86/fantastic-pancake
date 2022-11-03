const { Schema } = require("mongoose");
const formatDate = require("../helpers/formatDate");

const reactionSchema = new Schema({
  reactionID: {
    type: Schema.Types.ObjectId,
    default: new ObjectId(),
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
    get: formatDate(),
  },
});


module.exports = reactionSchema;