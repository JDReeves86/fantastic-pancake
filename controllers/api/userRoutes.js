const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.json({'message': 'hello'})
    }
    catch(err) {
        console.log(err);
    }
})

module.exports = router;