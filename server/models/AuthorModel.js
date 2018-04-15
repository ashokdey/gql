const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Nmae of author is required'],
  },
  age: { type: Number },
});

module.exports = mongoose.model('Authors', AuthorSchema);