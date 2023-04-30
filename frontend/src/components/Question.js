import React, { useState } from 'react';

function Question({ question, onGrade }) {
  const [answer, setAnswer] = useState('');

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const isCorrect = answer === question.correctAnswer;
    onGrade(isCorrect ? 1 : 0);
  };

  return (
    <div>
      <h2>{question.question}</h2>
      <form onSubmit={handleFormSubmit}>
        {question.answers.map((answer) => (
          <div key={answer}>
            <input
              type="radio"
              id={answer}
              name="answer"
              value={answer}
              onChange={handleAnswerChange}
            />
            <label htmlFor={answer}>{answer}</label>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Question;

