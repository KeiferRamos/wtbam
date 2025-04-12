import HeartIcon from "../src/assets/icons/heart (1).png";
import ShieldIcon from "../src/assets/icons/shield.png";
import PercentIcon from "../src/assets/icons/percentage.png";
import ArrowIcon from "../src/assets/icons/right-arrow.png";
import TelephoneIcon from "../src/assets/icons/telephone-handle-silhouette.png";
import "../src/assets/styles/global.scss";
import OptionBox from "./components/option";
import { useEffect, useState } from "react";
import { questions } from "./data/questions";

function App() {
  const [level, setLevel] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({
    question: "",
    options: [],
    answer: "",
  });
  const [disabled, setDisabled] = useState([]);
  const [lifeLine, setLifeLine] = useState([1, 2, 3]);

  const lifeLine1 = () => {
    const rand = Math.floor(Math.random() * 3);
    let opt = currentQuestion.options.filter(
      ({ text }) => text != currentQuestion.answer
    );

    opt.splice(rand, 1);

    setDisabled(() => opt.map(({ char }) => char));

    setLifeLine(() => lifeLine.filter((n) => n != 3));
  };

  const [lives, setLives] = useState(3);

  useEffect(() => {
    setCurrentQuestion(() => questions[level]);
  }, [level]);

  return (
    <div className="App">
      <div className="top-container">
        <h1>{currentQuestion.question}</h1>
        <ul>
          {Array(lives)
            .fill(0)
            .map(() => (
              <li onClick={() => setLives(lives - 1)}>
                <img src={HeartIcon} />
              </li>
            ))}
        </ul>
      </div>
      <ul className="options">
        {currentQuestion.options.map(({ text, char }, i) => {
          return (
            <OptionBox
              key={i}
              char={char}
              ans={text}
              disabled={disabled}
              level={level}
            />
          );
        })}
      </ul>

      <footer>
        <ul className="life-line">
          {lifeLine.includes(1) ? (
            <li
              onClick={() => setLifeLine(() => lifeLine.filter((n) => n != 1))}
            >
              <img src={ShieldIcon} />
            </li>
          ) : null}
          {lifeLine.includes(2) ? (
            <li
              onClick={() => setLifeLine(() => lifeLine.filter((n) => n != 2))}
            >
              <img src={TelephoneIcon} />
            </li>
          ) : null}
          {lifeLine.includes(3) ? (
            <li onClick={lifeLine1}>
              <img src={PercentIcon} />
            </li>
          ) : null}
        </ul>
        <span
          onClick={() => {
            setLevel(level + 1);
            setDisabled([]);
          }}
        >
          <img src={ArrowIcon} />
        </span>
      </footer>
    </div>
  );
}

export default App;
