const router = require("express").Router();
const Thought = require('../../models/thought');

router.get("/", async (req, res) => {
  try {
    const thoughtData = await Thought.find({})

    res.status(200).json(thoughtData)
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const thoughtData = await Thought.findById(req.params.id)

    res.status(200).json(thoughtData)
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const thoughtData = await Thought.create({
      thoughtText: req.body.thoughtText,
      username: req.body.username
    })

    /* What is the difference between this syntax and the one above? */
    // const thoughtData = await new Thought({
    //  thoughtText: req.body.thoughtText,
    //  username: req.body.username
    // })
    // thoughtData.save()

    res.status(200).json(thoughtData)
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const thoughtData = await Thought.findByIdAndUpdate(req.params.id, {
      thoughtText: req.body.thoughtText,
    })
    res.status(200).json(thoughtData)
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const thoughtData = await Thought.findByIdAndDelete(req.params.id)
    res.status(200).json(thoughtData)
  } catch (err) {
    console.log(err);
  }
});

// REACTION ROUTES

router.post("/:id/reactions", async (req, res) => {
  try {
    const thoughtData = await Thought.findById(req.params.id)

    res.status(200).json(thoughtData)
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id/reactions", async (req, res) => {
  try {
    const thoughtData = await Thought.findById(req.params.id)

    res.status(200).json(thoughtData)
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;