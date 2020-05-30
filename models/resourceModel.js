const mongoose = require('mongoose');
const validator = require('validator');

const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Please tell us the title of this resource!'],
    maxlength: [
      100,
      'A resource name must have less or equal then 100 characters'
    ],
    minlength: [
      10,
      'A resource name must have more or equal then 10 characters'
    ]
  },
  description: {
    type: String,
    trim: true,
    required: [
      true,
      'Please help our users uderstand the requirements of this opportunity'
    ],
    maxlength: [
      5000,
      'A resource description must have less or equal then 5000 characters'
    ],
    minlength: [
      10,
      'A resource description must have more or equal then 10 characters'
    ]
  },
  link: {
    type: String,
    required: [true, 'Please provide a valid url'],
    validate: [validator.isURL, 'Please provide a valid URL']
  },
  restype: {
    type: String,
    enum: ['internship', 'entrylevel'],
    default: 'entrylevel'
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: true
  }
});

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;
