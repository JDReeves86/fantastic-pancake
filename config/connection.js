require('dotenv');
const { connect, connection } = require('mongoose');

connect(`mongodb://localhost:27017/socialDB`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .catch(err => console.log(err))

module.exports = connection