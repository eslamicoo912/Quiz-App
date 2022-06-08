import React, { useState, useEffect } from "react";
import data from "../data";
import QuestionCard from "./QuestionCard";

const QuestionsList = () => {
  const [currentInd, setCurrentInd] = useState(0);
  const [points, setPoints] = useState(0);
  const [finishGame, setFinishGame] = useState(false);
  const [clickedAnswer, setClickedAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const currentQuestion = data[currentInd];

  const { id, question, answers, correct } = currentQuestion;

  useEffect(() => {
    console.log(points);
    console.log(currentInd);
  }, [points, currentInd]);

  function handleAnswerClick(ans) {
    if (ans === correct) {
      setPoints(points + 5);
      setIsCorrect(true);
    }
    setClickedAnswer(true);
  }

  function handleNextClick() {
    if (!clickedAnswer) {
      alert("Please choose answer");
      return;
    }
    if (currentInd === data.length - 1) {
      setFinishGame(true);
      return;
    }

    setCurrentInd(currentInd + 1);
    setClickedAnswer(false);
    setIsCorrect(false);
  }

  function handleAgainClick() {
    setFinishGame(false);
    setPoints(0);
    setCurrentInd(0);
    setClickedAnswer(false);
    setIsCorrect(false);
  }

  if (finishGame) {
    return (
      <div className="finish-container">
        <div className="again-container">
          <h1 className="points">Points : {points}</h1>
          <button
            className="again-btn btn btn btn-primary mt-4"
            onClick={handleAgainClick}
          >
            Again ?
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cards-container">
      <QuestionCard
        isCorrect={isCorrect}
        clickedAnswer={clickedAnswer}
        count={currentInd}
        handleNextClick={handleNextClick}
        className={clickedAnswer ? "clicked" : ""}
        Myquestion={currentQuestion}
        handleAnswerClick={(ans) => handleAnswerClick(ans)}
      />
    </div>
  );
};

export default QuestionsList;
