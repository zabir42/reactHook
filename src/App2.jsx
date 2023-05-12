import { useReducer } from "react";
import "./App.css";

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

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: "increment",
              value: 5,
            })
          }
        >
          increment
        </button>
        <p>count: {count.counter}</p>
        <button
          onClick={() =>
            dispatch({
              type: "decrement",
              value: 2,
            })
          }
        >
          decrement
        </button>
      </div>
    </>
  );
}

export default App;
