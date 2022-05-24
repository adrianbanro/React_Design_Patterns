import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { CounterProvider } from "./useCounterContext";
//import { Count,  Decrement, Increment } from "./contextComponents";

import { Count } from "./contextComponents/Count";
import {Increment } from "./contextComponents/Increment";
import { Decrement } from "./contextComponents/Decrement";

function CounterWidget1({ children, onChange, initialValue = -3 }) {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(Math.max(0, count - 1));
  };

  return (
    <CounterProvider value={{ count, handleIncrement, handleDecrement }}>
      <StyledCounter>
        {children}
        <Decrement />
        <Count />
        <Increment />
      </StyledCounter>

    </CounterProvider>
  );
}

const StyledCounter = styled.div`
  display: inline-flex;
  border: 1px solid #17a2b8;
  line-height: 1.5;
  border-radius: 0.25rem;
  overflow: hidden;
`;



export { CounterWidget1 };

// <Decrement />
// <Count />
// <Increment />

// const firstMounded = useRef(true);
// useEffect(() => {
//   if (!firstMounded.current) {
//     onChange && onChange(count);
//   }
//   firstMounded.current = false;
// }, [count, onChange]);

// Counter.Count = Count;
// Counter.Label = Label;
// Counter.Increment = Increment;
// Counter.Decrement = Decrement;
