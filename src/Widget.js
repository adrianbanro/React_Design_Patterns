//import React, { useEffect, useRef, useState } from "react";

//import { Count, Label, Decrement, Increment } from "./components";
//import { CounterProvider } from "./useCounterContext";

function Widget({ children, onChange, initialValue = 0 }) {
  //const [count, setCount] = useState(initialValue);

  // const firstMounded = useRef(true);
  // useEffect(() => {
  //   if (!firstMounded.current) {
  //     onChange && onChange(count);
  //   }
  //   firstMounded.current = false;
  // }, [count, onChange]);
  //
  // const handleIncrement = () => {
  //   setCount(count + 1);
  // };
  //
  // const handleDecrement = () => {
  //   setCount(Math.max(0, count - 1));
  // };

  return (
    //<CounterProvider value={{ count, handleIncrement, handleDecrement }}>
      <div>{children}</div>
    //</CounterProvider>
  );
}

// const StyledCounter = styled.div`
//   display: inline-flex;
//   border: 1px solid #17a2b8;
//   line-height: 1.5;
//   border-radius: 0.25rem;
//   overflow: hidden;
// `;
//
// Counter.Count = Count;
// Counter.Label = Label;
// Counter.Increment = Increment;
// Counter.Decrement = Decrement;

export  default Widget ;
