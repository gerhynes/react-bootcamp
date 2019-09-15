import React from "react";
import useToggle from "./hooks/useToggle";

function Toggler() {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isHeartbroken, toggleIsHeartbroken] = useToggle(false);
  const [isBananas, toggleIsBananas] = useToggle(true);

  return (
    <div>
      <h1 onClick={toggleIsHappy}>{isHappy ? "😊" : "😥"}</h1>
      <h1 onClick={toggleIsHeartbroken}>{isHeartbroken ? "💔" : "💘"}</h1>
      <h1 onClick={toggleIsBananas}>{isBananas ? "🍌" : "🍊"}</h1>
    </div>
  );
}

export default Toggler;
