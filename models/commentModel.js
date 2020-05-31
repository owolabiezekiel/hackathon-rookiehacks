const mongoose = require('mongoose');
const validator = require('validator');

const commentSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  comm: {
    type: String,
    trim: true,
    required: [true, 'Please provide forum title'],
    maxlength: [2000, 'comment must be less than 2000 char'],
    minlength: [1, 'comment cannot be empty']
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: true
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
