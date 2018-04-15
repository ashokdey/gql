const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const MONGODB_URI = 'mongodb://localhost/GraphQL'
//db connection
mongoose.connect(MONGODB_URI);

// log on successfull connection
mongoose.connection.once('open', () => console.log('connected to database!'));

module.exports = mongoose;