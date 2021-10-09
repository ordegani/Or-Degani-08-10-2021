import { createStore } from "redux";

function locationReducer(state = { value: "Tel Aviv" }, action) {
  switch (action.type) {
    case "location/query":
      return { value: { query } };
  }
}
function savedReducer(state = { value: [] }, action) {
  switch (action.type) {
    case "location/save":
      return { value: [state.value + {location}]};
  }
}

let store = createStore(locationReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: "location/query" });
