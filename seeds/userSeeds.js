const User = require("../models/user");

const userData = [
  {
    username: "ImmortanJoe",
    email: "test@test.com",
    thoughts: [],
    freinds: [],
  },
  {
    username: "MaxRockatansky",
    email: "fake@fake.com",
    thoughts: [],
    freinds: [],
  },
];

const seedUsers = async () => {
  await User.deleteMany({});
  await User.insertMany(userData);
};

module.exports = seedUsers;
