const mongoose = require('mongoose');
const validator = require('validator');

const forumSchema = new mongoose.Schema({
  name: {
    unique: true,
    type: String,
    trim: true,
    required: [true, 'Please provide forum title'],
    maxlength: [100, 'A forum title must have less or equal to 100 characters'],
    minlength: [10, 'A forum title must have more or equal to 10 characters']
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'Please add a little discription'],
    maxlength: [500, 'description too long. Max 500 chars'],
    minlength: [10, 'A forum description must have 10 or more characters']
  },
  comments: {
    type: Array,
    default: ['Inserted comment', 'Second comment inserted']
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: true
  }
});

const Forum = mongoose.model('Forum', forumSchema);

module.exports = Forum;
