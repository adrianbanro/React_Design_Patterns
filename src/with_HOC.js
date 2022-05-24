import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { CounterProvider } from "./useCounterContext";
//import { Count,  Decrement, Increment } from "./contextComponents";
import { useCounter } from './useCounter.js';

import { Count } from "./contextComponents/Count";
import {Increment } from "./contextComponents/Increment";
import { Decrement } from "./contextComponents/Decrement";


// const withNothing43 = (Component) => {
//   return ({ count, ...props }) => {
//     return Component({ count: 7 * count, ...props })
//   }
// }

  const  with_HOC = (Component) => {
  return ({ count, ...props }) => {
    return(
      <React.Fragment>
    <div>
  sdsd
<Component count={count*3000}/>
    </div>
    </React.Fragment>
)
  }
}

function  WithHOC(Component)  {
// const [count, setCount] = useState(2);
   const { count, handleIncrement, handleDecrement } = useCounter();

return ({ onChange, count2, ...props }) => {
  // const handleIncrement = () => {
  //   setCount(count + 1);
  // };
  //
  // const handleDecrement = () => {
  //   setCount(Math.max(0, count - 1));
  // };
  return(
    <React.Fragment>
    <CounterProvider value={{ count, handleIncrement, handleDecrement }}>
      <StyledCounter>
        Dollar :
        <Decrement />
        <Count />
        <Increment />
      </StyledCounter>
    </CounterProvider>
    <div> extra HOC wrapper stuff to be added here if needed</div>

    <Component count={count*1000*count2}/>
    </React.Fragment>
  )

}
}





function CounterWidget4({ children, render, onChange, initialValue = -3 }) {
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
        Dollar :
        <Decrement />
        <Count />
        <Increment />
      </StyledCounter>
      {render(count)}
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


export default WithHOC ;
//export { CounterWidget4 };
//export default  with_HOC;

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
