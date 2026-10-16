import { useState } from "react";
import { questions } from "../data/questions";

function PracticeSession() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});

  const question = questions[currentQuestion];

  const selectedAnswer = selectedAnswers[question.id] || "";

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers((previousAnswers) => ({
      ...previousAnswers,
      [question.id]: answer,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="practice-session">
      <div className="question-header">
        <span>
          Question {currentQuestion + 1} of {questions.length}
        </span>

        <span>{question.section}</span>
      </div>
<div className="question-navigator">
  <p>Questions</p>

  <div className="question-numbers">
    {questions.map((item, index) => (
      <button
  key={item.id}
  className={`${
    currentQuestion === index ? "current" : ""
  } ${selectedAnswers[item.id] ? "answered" : ""}`}
  onClick={() => setCurrentQuestion(index)}
>
  {index + 1}
</button>
    ))}
  </div>
</div>


      <div className="question-card">
        <p className="question-number">
          Question {currentQuestion + 1}
        </p>

        <h2>{question.question}</h2>

        <div className="answer-options">
          {question.options.map((option) => (
            <button
              key={option}
              className={`answer-option ${
                selectedAnswer === option ? "selected" : ""
              }`}
              onClick={() => handleAnswerSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="question-navigation">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          disabled={currentQuestion === questions.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PracticeSession;