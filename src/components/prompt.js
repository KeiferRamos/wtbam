import React from "react";
import CorrectIcon from "../../src/assets/icons/yes.png";
import ErrorIcon from "../../src/assets/icons/delete.png";

function Prompt({ isCorrect, onClick }) {
  return (
    <div className="prompt" onClick={onClick}>
      {isCorrect ? <img src={CorrectIcon} /> : <img src={ErrorIcon} />}
    </div>
  );
}

export default Prompt;
