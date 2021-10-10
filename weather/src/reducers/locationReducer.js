import { createStore } from "redux";
import query from '../actions/locationQuery';

function locationReducer(state = { value: "Tel Aviv" }, action) {
  switch (action.type) {
    case "locationQuery":
      return { value: {query} };
      default:
      return state;
  }
}

let store = createStore(locationReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: "location/query" });

export default locationReducer;
