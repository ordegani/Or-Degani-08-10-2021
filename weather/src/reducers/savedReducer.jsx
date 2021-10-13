import { createStore } from "redux";

function savedReducer(state = { value: ["1"] }, action) {
  if (action.type == "location/save") {
    return { value: [...state] };
  } else {
    return state;
  }
}

export default savedReducer;
