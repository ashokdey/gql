const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name for book is required'],
    unique: [true, 'Duplicate book name'],
  },
  genre: {
    type: String,
    required: [true, 'Book genre is required'],
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Authors',
  }
});

module.exports = mongoose.model('Books', BookSchema);