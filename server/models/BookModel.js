const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Nmae for book is required'],
  },
  genre: {
    type: String,
    required: [true, 'Book genre is required'],
  },
  authorId: {
    type: Schema.Types.ObjectId,
    ref: 'Authors',
  }
});

module.exports = mongoose.model('Books', BookSchema);