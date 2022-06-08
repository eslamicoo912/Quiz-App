import React from "react";

const QuestionCard = ({
  Myquestion,
  handleAnswerClick,
  handleNextClick,
  count,
  clickedAnswer,
  isCorrect,
}) => {
  const { id, question, answers, correct } = Myquestion;
  return (
    <div key={id} className="q-card">
      <h1 className="q-num">{`Q - ${count + 1}`}</h1>
      <h3 className="question py-3">{question}</h3>
      {answers.map((ans, index) => {
        return (
          <div
            key={index}
            className="answer-container pt-1"
            onClick={() => handleAnswerClick(ans)}
          >
            <p className={clickedAnswer ? "answer clicked" : "answer"}>{ans}</p>
          </div>
        );
      })}
      {clickedAnswer ? (
        <div
          className={
            isCorrect ? "correct py-3 my-3 w-75" : "false py-3 my-3 w-75"
          }
        >
          Correct Answer : {correct}
        </div>
      ) : (
        ""
      )}
      <button className="btn btn-lg btn-success my-2" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default QuestionCard;
