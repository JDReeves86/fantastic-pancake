const router = require("express").Router();
const User = require('../../models/user');

router.get("/", async (req, res) => {
  try {
    const userData = await User.find({})


    res.status(200).json(userData)
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findById(req.params.id)

    res.status(200).json(userData)
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email
    })

    /* What is the difference between this syntax and the one above? */
    // const userData = await new User({
    //   username: req.body.username,
    //   email: req.body.email
    // })
    // userData.save()

    res.status(200).json(userData)
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const userData = await User.findByIdAndUpdate(req.params.id, {
      username: req.body.username,
      email: req.body.email
    })
    res.status(200).json(userData)
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const userData = await User.findByIdAndDelete(req.params.id)
    res.status(200).json(userData)
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// FRIEND ROUTES

router.post("/:id/friends/:friendID", async (req, res) => {
  try {
    const userData = await User.findByIdAndUpdate(req.params.id,
      { $addToSet: { friends: req.params.friendID }},
    )

    res.status(200).json(userData)
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id/friends/:friendID", async (req, res) => {
  try {
    const userData = await User.findByIdAndUpdate(req.params.id,
      { $pull: { friends: req.params.friendID }},
    )

    res.status(200).json(userData)
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
