import React from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { StyledButton } from "./styles.js";
//import { useCounterContext } from "../useCounterContext";

function Decrement(props) {
  //const { handleIncrement } = useCounterContext();
  return (
    <button onClick={props.handleDecrement}>
      -
    </button>
  );
}

export default  Decrement ;
