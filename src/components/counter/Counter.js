import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementAction,
  incrementAction,
} from "../../services/actions/counterActions";
import "./counter.css";

const Counter = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  if (state.count >= 20) {
    state.count = 20;
  }
  if (state.count < 0) {
    state.count = 0;
  }
  
  const handleIncrement = () => {
    dispatch(incrementAction(5));
  };

  const handleDecrement = () => {
    dispatch(decrementAction(5));
  };

  return (
    <>
      <div className="box">
        <button onClick={handleIncrement} className="btn">
          +
        </button>

        <h1 className="count"> {state.count} </h1>

        <button onClick={handleDecrement} className="btn">
          -
        </button>
      </div>
    </>
  );
};

export default Counter;
