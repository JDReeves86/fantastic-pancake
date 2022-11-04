const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "You need to enter a user name my dude."],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter an e-mail, bro"],
      unique: true,
      lowercase: true,
      validate: {
        validator: function (email) {
          regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}", "g");
          return regex.test(email);
        },
        message: "Bruh, enter a valid email address.",
      },
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      // allows for use of virtuals
    },
  }
);

// adds the friendCount virtual
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("user", userSchema);

module.exports = User;
