const { Schema, model } = require("mongoose");

const userSchema = new Schema({
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
    validate: {
      validator: function (email) {
        regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}", "g");
        return regex.test(email);
      },
      message: "Please eneter a valid email address.",
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
  virtuals: {
    friendCount: {
      get() {
        return this.friends.length;
      },
    },
  },
});

const User = model("user", userSchema);

module.exports = User;
