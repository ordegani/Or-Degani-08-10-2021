import { createStore } from "redux";

function savedReducer(state = { value: ["1"] }, action) {
    switch (action.type) {
      case "location/save":
        return { value: [ ...state]};
        default:
            return state;
    }
  }

let store = createStore(savedReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: "savedReducer" });

export default savedReducer;



