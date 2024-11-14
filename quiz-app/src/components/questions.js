// src/Question.js
import React from "react";

const Question = ({ question, onAnswerClick }) => {
  return (
    <div className="question-container">
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button key={index} onClick={() => onAnswerClick(index)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
