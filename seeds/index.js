const seedUsers = require("./userSeeds");
const seedThoughts = require("./thoughtSeeds");
const db = require("../config/connection");
require("dotenv");

const seedDB = async () => {
  await db.once("open", () => {
    console.log("connection open");
  });

  await seedUsers();
  console.log("***///-------- Users Seeded --------\\\\\\***");

  await seedThoughts();
  console.log("***///-------- Thoughts Seeded --------\\\\\\***");

  db.close();
};

seedDB();
