import React from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { StyledButton } from "./styles.js";
//import { useCounterContext } from "../useCounterContext";

function Increment(props) {
  //const { handleIncrement } = useCounterContext();
  return (
    <button onClick={props.handleIncrement}>
      +
    </button>
  );
}

export default  Increment ;
