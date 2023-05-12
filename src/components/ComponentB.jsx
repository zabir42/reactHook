import React, { useContext } from "react";
import { counterContext } from "../App3";

const ComponentB = () => {
  const countContext = useContext(counterContext);
  return (
    <div>
      <p>Component A</p>
      <button
        onClick={() =>
          countContext.countDispatch({
            type: "increment",
            value: 5,
          })
        }
      >
        increment
      </button>
      <button
        onClick={() =>
          countContext.countDispatch({
            type: "decrement",
            value: 2,
          })
        }
      >
        decrement
      </button>
    </div>
  );
};

export default ComponentB;
