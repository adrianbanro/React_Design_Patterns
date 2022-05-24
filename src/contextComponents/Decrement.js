import React from "react";
// import { StyledButton } from "./styles.js";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCounterContext } from "../useCounterContext";

function Decrement() {
  const { handleDecrement } = useCounterContext();
  return (
    <div onClick={handleDecrement}>
      -
    </div>
  );
}

export { Decrement };
