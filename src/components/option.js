import React, { useEffect, useState } from "react";

function OptionBox({ ans, char, disabled, level, selectAns, selected }) {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setClicked(() => false);
  }, [level]);

  return (
    <li
      className={`${
        disabled.includes(char) ? "disabled" : selected == ans ? "selected" : ""
      }`}
      onClick={() => {
        if (clicked) {
          selectAns(ans);
        } else {
          setClicked(true);
        }
      }}
    >
      <span>{char}</span>
      {clicked ? ans : ""}
    </li>
  );
}

export default OptionBox;
