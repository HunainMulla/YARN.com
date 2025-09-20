const mongoose = require('mongoose');

const strandSchema = new mongoose.Schema({
    createdBy:{ 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
  threadId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Thread',
    required: true
  },
  contributorName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  content: {
    type: String,
    required: true,
    trim: true,
    maxlength: 2000
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Strand', strandSchema);
