const mongoose = require('mongoose');

const threadSchema = new mongoose.Schema({
  createdBy:{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000
  },
  tags: [{
    type: String,
    trim: true,
    lowercase: true
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Thread', threadSchema);
