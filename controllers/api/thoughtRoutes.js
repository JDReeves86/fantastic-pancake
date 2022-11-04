const router = require("express").Router();
const Thought = require('../../models/thought');
const User = require('../../models/user');

router.get("/", async (req, res) => {
  try {
    const thoughtData = await Thought.find({})

  !thoughtData ? 
    res.status(404).json({message: 'No thoughts found by that ID'}) 
    : res.status(200).json(thoughtData)

  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const thoughtData = await Thought.findById(req.params.id)

  !thoughtData ? 
    res.status(404).json({message: 'No thoughts found by that ID'}) 
    : res.status(200).json(thoughtData)

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
    const userData = await User.find({
      username: req.body.username
    }).update({
      $addToSet : {thoughts: thoughtData}
    })
    
    /* What is the difference between this syntax and the one above? */
    // const thoughtData = await new Thought({
    //  thoughtText: req.body.thoughtText,
    //  username: req.body.username
    // })
    // thoughtData.save()

  if (!userData) res.status(404).json({message: 'No users found by that ID'}) 

  !thoughtData ? 
    res.status(404).json({message: 'No thoughts found by that ID'}) 
    : res.status(200).json(thoughtData)

  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const thoughtData = await Thought.findByIdAndUpdate(req.params.id, {
      thoughtText: req.body.thoughtText,
    })
    
  !thoughtData ? 
    res.status(404).json({message: 'No thoughts found by that ID'}) 
    : res.status(200).json(thoughtData)

  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const thoughtData = await Thought.findByIdAndDelete(req.params.id);

    !thoughtData ? 
    res.status(404).json({message: 'No thoughts found by that ID'}) 
    : res.status(200).json(thoughtData)

  } catch (err) {
    console.log(err);
  }
});

// REACTION ROUTES

router.post("/:id/reactions", async (req, res) => {
  try {

    const thoughtData = await Thought.findByIdAndUpdate(req.params.id, 
      { $addToSet : { reactions : req.body } },
      { new : true }
    )

    !thoughtData ? 
      res.status(404).json({message: 'No thoughts found by that ID'}) 
      : res.status(200).json(thoughtData)

  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id/reactions", async (req, res) => {
  try {
    const thoughtData = await Thought.findByIdAndUpdate(req.params.id, 
      { $pull : { reactions : { _id: req.body.reactionID } } },
      { new: true }
    )

    !thoughtData ? 
      res.status(404).json({message: 'No thoughts found by that ID'}) 
      : res.status(200).json(thoughtData)

  } catch (err) {
    console.log(err);
  }
});

module.exports = router;