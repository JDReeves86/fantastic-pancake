require('dotenv');
const { connect, connection } = require('mongoose');

connect(`mongodb://localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .catch(err => handleError(err))

module.exports = connection