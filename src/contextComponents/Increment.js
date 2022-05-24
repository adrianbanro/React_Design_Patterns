import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { StyledButton } from "./styles.js";
import { useCounterContext } from "../useCounterContext";

function Increment() {
  const { handleIncrement } = useCounterContext();
  return (
    <div onClick={handleIncrement}>
      +
    </div>
  );
}

export { Increment };
