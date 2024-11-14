// src/Results.js
import React from "react";
import questions from "./questions";

const Results = ({ userAnswers, restartQuiz }) => {
  const correctAnswersCount = userAnswers.reduce((acc, answer, index) => {
    return answer === questions[index].answer ? acc + 1 : acc;
  }, 0);

  const feedback =
    correctAnswersCount >= 4 ? "Well done!" : "Try again";

  return (
    <div className="results-container">
      <h2>Your Results</h2>
      <p>You got {correctAnswersCount} out of {questions.length} correct.</p>
      <p>{feedback}</p>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            {question.question} -{" "}
            {userAnswers[index] === question.answer
              ? "Correct"
              : "Incorrect"}
          </li>
        ))}
      </ul>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default Results;
