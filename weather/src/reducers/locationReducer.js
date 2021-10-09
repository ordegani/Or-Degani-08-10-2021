import { createStore } from "redux";

function locationReducer(state = { value: "Tel Aviv" }, action) {
  switch (action.type) {
    case "location/query":
      return { value: { query } };
      default:
      return state;
  }
}

let store = createStore(locationReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: "location/query" });
