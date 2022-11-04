const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  editUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(createUser);

// user id for user to be edited
router.route("/:id").get(getSingleUser).put(editUser).delete(deleteUser);

// user id to add friend to, friend id of user to add as friend
router.route("/:id/friends/:friendID").post(addFriend).delete(deleteFriend);

module.exports = router;
