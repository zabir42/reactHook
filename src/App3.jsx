import React, { useReducer } from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";

export const counterContext = React.createContext();

const initialState = {
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.value };
    case "decrement":
      return { ...state, counter: state.counter - action.value };
    default:
      return state;
  }
};

const App = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app">
      <div>count: {count.counter}</div>
      <counterContext.Provider value={{ countDispatch: dispatch }}>
        <ComponentA />
      </counterContext.Provider>
    </div>
  );
};

export default App;
