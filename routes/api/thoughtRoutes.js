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

router
  .route("/:id")
  .get(getSingleThought)
  .put(editThought)
  .delete(deleteThought);

router.route(":id/reactions").post(postReaction).delete(deleteReaction);

module.exports = router;
