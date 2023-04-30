import React, { useState } from 'react';
import Question from './Question';

function Quiz({ questions, onGrade }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];

  const handleQuestionGrade = (isCorrect) => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    setCurrentQuestionIndex(nextQuestionIndex);
    onGrade(isCorrect ? 1 : 0);
  };

  return (
    <div>
      {currentQuestionIndex < questions.length ? (
        <Question question={currentQuestion} onGrade={handleQuestionGrade} />
      ) : (
        <p>Quiz complete</p>
      )}
    </div>
  );
}

export default Quiz;

