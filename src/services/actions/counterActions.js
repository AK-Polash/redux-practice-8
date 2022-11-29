import { DECREMENT, INCREMENT, RESET } from "../constants/counterConstants";

const incrementAction = (c) => {
  return {
    type: INCREMENT,
    payload: c,
  };
};

const decrementAction = (c) => {
  return {
    type: DECREMENT,
    payload: c,
  };
};

const resetAction = () => {
  return {
    type: RESET,
  };
};

export { incrementAction, decrementAction, resetAction };
