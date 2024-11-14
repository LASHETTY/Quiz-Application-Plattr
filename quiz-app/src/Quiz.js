// src/Quiz.js
import React, { useState } from "react";
import questions from "./questions";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerClick = (selectedIndex) => {
    const updatedAnswers = [...userAnswers, selectedIndex];
    setUserAnswers(updatedAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setUserAnswers([]);
    setCurrentQuestionIndex(0);
    setShowResults(false);
  };

  return (
    <div className="quiz-container">
      {showResults ? (
        <Results userAnswers={userAnswers} restartQuiz={restartQuiz} />
      ) : (
        <Question
          question={questions[currentQuestionIndex]}
          onAnswerClick={handleAnswerClick}
        />
      )}
    </div>
  );
};

export default Quiz;
