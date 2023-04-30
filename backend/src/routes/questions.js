const express = require('express');
const router = express.Router();
const Question = require('../models/question');

router.get('/', async (req, res) => {
  const questions = await Question.find();
  res.send(questions);
});

router.post('/grade', async (req, res) => {
  const { quizQuestions, userAnswers } = req.body;

  const gradedQuestions = quizQuestions.map((question, index) => {
    const isCorrect = question.answer === userAnswers[index];
    return { text: question.text, isCorrect };
  });

  const score = gradedQuestions.filter((question) => question.isCorrect).length;

  res.send({ gradedQuestions, score });
});

module.exports = router;

