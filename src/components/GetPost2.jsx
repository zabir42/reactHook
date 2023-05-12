import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        post: action.data,
        error: "",
      };
    case "ERROR":
      return {
        loading: false,
        post: {},
        error: "there is something error",
      };
    default:
      return state;
  }
};

const GetPost2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "SUCCESS",
          data: data,
        });
      })
      .catch(() => {
        dispatch({
          type: "ERROR",
        });
      });
  }, []);

  return (
    <div>
      {state.loading ? "Loading" : state.post.body}
      {state.error || null}
    </div>
  );
};

export default GetPost2;
