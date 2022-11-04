const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  postThought,
  editThought,
  deleteThought,
  postReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts).post(postThought);

// thought ID to be edited
router
  .route("/:id")
  .get(getSingleThought)
  .put(editThought)
  .delete(deleteThought);

router.route("/:id/reactions").post(postReaction).delete(deleteReaction);

module.exports = router;
