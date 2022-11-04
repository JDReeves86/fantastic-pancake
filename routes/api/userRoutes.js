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

router.route("/:id").get(getSingleUser).put(editUser).delete(deleteUser);

router.route("/:id/friends/:friendID").post(addFriend).delete(deleteFriend);

module.exports = router;
