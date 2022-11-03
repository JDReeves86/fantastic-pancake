const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    // const userData = await 
    res.status(200).json({message : 'hi'})
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
