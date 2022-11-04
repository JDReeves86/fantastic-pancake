const { Schema, model } = require("mongoose");

// reaction schema is not a model, instead it provides the template for reactions.
const reactionSchema = new Schema(
  {
    reactionID: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
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
        const options = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          seconds: "numeric",
        };
        const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
          date
        );
        return formattedDate;
      },
    },
  },
  {
    toJSON: {
      getters: true,
      // allows for use of the getter for createdAt
    },
    timestamps: true,
    // keeps timestamps for updates
  }
);

const thoughtSchema = new Schema(
  {
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
      get: (date) => {
        const options = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          seconds: "numeric",
        };
        const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
          date
        );
        return formattedDate;
      },
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
    // by placing reactionSchema into the array it ensures that thoughts being placed into the reactions array are formatted
    // to the reactionSchema
  },
  {
    toJSON: {
      getters: true,
      // allows for use of the getter for createdAt
    },
    timestamps: true,
    // keeps timestamps for updates
  }
);

const Thought = model("thoughts", thoughtSchema);

module.exports = Thought;
