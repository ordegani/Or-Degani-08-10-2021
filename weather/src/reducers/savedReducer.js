import { createStore } from "redux";

function savedReducer(state = { value: [INIT_STATE] }, action) {
    switch (action.type) {
      case "location/save":
        return { value: [... state]};
    }
  }

let store = createStore(savedReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: "savedReducer" });





