import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
//import React from "react";
import React, { useState, useCallback } from 'react';
import Increment from "./basicComponents/Increment";
import Decrement from "./basicComponents/Decrement";
import Count from "./basicComponents/Count";
import Widget from "./Widget";

import { CounterWidget } from "./CounterWidget";
import { CounterWidget1 } from "./CounterWidget1";
import { CounterWidget2 } from "./CounterWidget2";
import { CounterWidget3 } from "./CounterWidget3";
import { CounterWidget  as CounterWidget22 } from "./CounterWidget";
import with_HOC from "./with_HOC";
import WithHOC from "./with_HOC";
// import { WithHOC as WithHOC_array }  from "./with_HOC_array";
import WithHOC_array   from "./with_HOC_array";
import WithCommisionHOC_array from "./withCommission_HOC_array";

import WithAvailabilityHOC_array from "./withAvailability_HOC_array";
import WithScheduleHOC_array from "./withSchedule_HOC_array";

// import { Count, Decrement, Increment } from "./contextComponents";
import { Count as ContextCount } from "./contextComponents/Count";
import { Decrement as ContextDecrement } from "./contextComponents/Decrement";
import { Increment as ContextIncrement } from "./contextComponents/Increment";
//<MultiplyCountDecorator count={Counter}/>

// context compounded components
// <CounterWidget>
//
// <ContextDecrement />
// <ContextCount />
// <ContextIncrement />
//
// </CounterWidget>

function App() {

  const withNothing = (Component) => ({ count,...props }) => (
    <Component {...props} />
  )

  // const withCountState = (Wrapped) => {
  //   // const [count, setCount] = useState(0);
  //   return (props) => {
  //
  //           // props['count'] = count;
  //           // props['setCount'] = setCount;
  //           // props.count = count;
  //           // props.setCount = setCount;
  //     return <Wrapped {...props} />;
  //   }
  // }
  //
  //
  // const Wrapped = (props) =>  {
  //    // const {count, setCount} = props;
  //    // onClick={() => setCount(count + 1)
  //    const {count} = props;
  //    return(
  //      <div>
  //         <h1>Counter Functional Component</h1>
  //         <p>You clicked {count} times</p>
  //         <button >
  //            Increment count
  //         </button>
  //      </div>);
  // };
  //
  // const EnhancedWrapped = withCountState(Wrapped);

  const multiply = (multiplier) => (multiplicand) =>
    multiplicand * multiplier;

  const subtraction = (minuend) => (subtrahend) =>
    subtrahend - minuend;

  // const result = compose(
  //   subtraction(2),
  //   multiply(4),
  // )(3);
  //
  // console.log(result);
  // // 10

  const withNothing22 = (Component) => {
    return ({ count, ...props }) => {
      return Component({ count: 2.5 * count, ...props })
    }
  }

  const withNothing33 = (Component) => {
    return ({ count, ...props }) => {
      return Component({ count: 7 * count, ...props })
    }
  }

  const multiplyBy2 = (Component) => {
    return ({ count, ...props }) => {
      return Component({ count: 2 * count, ...props })
    }
  }
  const multiplyBy3 = (Component) => {
    return ({ count, ...props }) => {

      // const [count3, setCount3] = useState(0);
      // props['count3'] = count3;
      // props['setCount3'] = setCount3;

      return Component({ count: 3 * count, ...props })
    }
  }

  const Counter33 = ({ count }) => {
    const [ count2, setCount ] = React.useState(0)

    return (
      <React.Fragment>
      <span>Works fine {count*count2}</span>
      <div

      children={count2}


        onClick={() => setCount(prevCount => prevCount + 1)}
        style={{ fontSize: '32px', userSelect: 'none' }}
      />
       </React.Fragment>
    )
  }

  const Counter22 = ({ count }) => {
    // const {count, setCount} = props;
  return <span>Works good {count}</span>
}

//  const ComponentWithNothing = withNothing22(Counter22);
  // const ComponentWithNothing = withNothing33(Counter22);
    // const ComponentWithNothing = withNothing33(Counter33);
  // const  <ComponentWithNothing someProp="test" />;

const ComponentWithNothing = multiplyBy3(Counter33);

//const ComponentWithNothing = WithHOC(Counter33);


  const WidgetLayout = ({
    plus,
    minus,
    counting
  }) => {
    return (
      <div>
      <h5> click count : {plus}  {counting} {minus} </h5>
      </div>
    )
  }

  // const MultiplyCountDecorator = (counter) => {
  //   return ({ counting, ...props }) => {
  //     return counter({ counting: 2 * counting, ...props })
  //   }
  // }
  //
  // const DecoratedCounter = MultiplyCountDecorator(WidgetLayout)



//   function withCountState(Wrapped) {
//
//    return function (props) {
//
//      const [count, setCount] = useState(0);
//
//       // props.count = count;
//       // props.setCount = setCount;
//
//       props['count'] = count;
//       props['setCount'] = setCount;
//       return <Wrapped {...props} />;
//    }
// }


// useCallback(
const withCountState = (Wrapped) => {
  // const [count, setCount] = useState(0);
  return (props) => {

          // props['count'] = count;
          // props['setCount'] = setCount;
          // props.count = count;
          // props.setCount = setCount;
    return <Wrapped {...props} />;
  }
}
// )

// const MultiplyCountDecorator = (Counter) => {
//   return ({ count, ...props }) => {
//     return Counter({ count: 2 * count, ...props })
//   }
// }

const Wrapped = (props) =>  {
   // const {count, setCount} = props;
   // onClick={() => setCount(count + 1)
   const {count} = props;
   return(
     <div>
        <h1>Counter Functional Component</h1>
        <p>You clicked {count} times</p>
        <button >
           Increment count
        </button>
     </div>);
};

const EnhancedWrapped = withCountState(Wrapped);

  function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
        <span>Count equals {props.count}</span>
      </div>
    );
  }

  function WelcomeDialog() {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          Welcome
        </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>
    );
  }

  const Counter32 = ({ count }) => {
  return <span>Merge bine {count}</span>
}
  const Counter = ({ count }) => {
  return <span>Count equals {count}</span>
}

const multiplyCountDecorator = (Component) => {
  return ({ count, ...props }) => {
    return Component({ count: 2 * count, ...props })
  }
}

const withNothing43 = (Component) => {
  return ({ count, ...props }) => {
    return Component({ count: 7 * count, ...props })
  }
}

// const withNothing44 = (Component) => {
//   return ({ count, ...props }) => {
//     return
// <CounterWidget1>
//     Component({ count: 7 * count, ...props })
//     </CounterWidget1>
//   }
// }





  const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;
  const Pound = ({ count }) => <p>Pound: {count * 0.79}</p>;
  const DKK = ({ count }) => <p>DKK: {count * 6.79}</p>;

//const DecoratedCounter = withNothing43(Counter32)

const DecoratedCounter = withNothing43(Pound)




  const [ count, setCount ] = React.useState(0)

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1.5);
     console.log("count + 1 = ",);
  };

 const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
     console.log("count - 1 = ",);
  };




  const  with_HOC33 = (Component) => {
  return ({ count, ...props }) => {
    return(
      <React.Fragment>
      <div> 23434</div>
      <Component count={count*7}/>
      </React.Fragment>
    )

  }
}

const withNothing45 = (Component) => {
  return ({ count, ...props }) => {
    return Component({ count: 500 * count, ...props })
  }
}

const CounterWidget_wHOC = with_HOC(Pound);

const CounterWidget_WithHOC = WithHOC(Pound);

//const CounterWidget_WithHOC_array = WithHOC_array([DKK, Pound]);
// const CounterWidget_WithHOC_array = WithHOC_array()([DKK, Pound]);
 //const CounterWidget_WithHOC_array = WithHOC_array('No exchanging for now')([DKK, Pound]);
 const CounterWidget_WithHOC_array = WithHOC_array({
  closeExchangeFeedback: 'the shop is closed.',
  noExchangeFeedback: 'we do not trade this valuta.',
  outOfCurrencyFeedback: 'no more supply of valuta for now .',
})([DKK, Pound]);

const CounterWidget_WithComission_HOC_array = WithCommisionHOC_array(WithHOC_array({
 closeExchangeFeedback: 'the shop is closed.',
 noExchangeFeedback: 'we do not trade this valuta.',
 outOfCurrencyFeedback: 'no more supply of valuta for now .',
})([DKK, Pound]));

const CounterWidget_Composition_HOC_array = WithScheduleHOC_array({closeExchangeFeedback: 'the shop is closed.'})(WithAvailabilityHOC_array({noExchangeFeedback: 'we do not trade this valuta.'})([DKK, Pound]));


  //const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        -----
        Slot / bridged basic componded components
        <WidgetLayout
          plus={(
            <Increment handleIncrement={handleIncrement}/>
          )}
          minus={(
            <Decrement handleDecrement={handleDecrement}/>
          )}
          counting={(
            <Count count={count}/>
          )}
        />

        -----
        basic componded components
        <Widget>
          <StyledCounter>
        <Decrement handleDecrement={handleDecrement}/>
        <Count count={count}/>
        <Increment handleIncrement={handleIncrement}/>
          </StyledCounter>
        </Widget>
---------
        context compounded components
        <CounterWidget>

        <ContextDecrement />
        <ContextCount />
        <ContextIncrement />

        </CounterWidget>

        -----
        context component w/0 compounded components
        <CounterWidget1>

        </CounterWidget1>

        -----
        render prop w context w/o compounded components
        <CounterWidget2  render={amount => (
                  <div>
                    <Euro amount={amount} />
                  </div>
                )}>

        </CounterWidget2>

        -----
        render prop w/context compounded components
        <CounterWidget3  render={amount => (
                  <div>
                    <Euro amount={amount} />
                  </div>
                )}>

        <ContextDecrement />
        <ContextCount />
        <ContextIncrement />

        </CounterWidget3>

        -----
        HOC composition
        <Counter count={3}/>

        decorated counter HOC composition
        <DecoratedCounter count={13}/>

        <WelcomeDialog />

        <EnhancedWrapped/>
----comp with nothing
<ComponentWithNothing count={7}/>

---- with HOC as const
<CounterWidget_wHOC count2={7}/>

---- with HOC as function
<CounterWidget_WithHOC count2={5}/>

---- with HOC as function, rendering an array of components
<CounterWidget_WithHOC_array count2={0.5} isTraded={false} isOpen={false}/>

---- with Comission HOC as function, rendering an array of components
<CounterWidget_WithComission_HOC_array count2={0.5} isTraded={true} isOpen={true}/>

---- with Comission HOC as function, rendering an array of components
<CounterWidget_Composition_HOC_array commission={0.065} count2={0.5} isTraded={true} isOpen={true}/>
      </header>
    </div>
  );
}



const StyledCounter = styled.div`
  display: inline-flex;
  border: 1px solid #17a2b8;
  line-height: 1.5;
  border-radius: 0.25rem;
  overflow: hidden;
`;
export default App;
