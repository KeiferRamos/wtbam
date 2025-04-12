import React, { useEffect, useState } from "react";

function OptionBox({ ans, char, disabled, level }) {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setClicked(() => false);
  }, [level]);

  return (
    <li
      className={`${disabled.includes(char) ? "disabled" : ""}`}
      onClick={() => setClicked(!clicked)}
    >
      <span>{char}</span>
      {clicked ? ans : ""}
    </li>
  );
}

export default OptionBox;
