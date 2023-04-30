const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  choices: {
    type: [String],
    required: true,
  },
  answer: {
    type: Number,
    required: true,
  },
  explanation: {
    type: String,
    required: true,
  },
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;

