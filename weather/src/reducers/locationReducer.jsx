import { createStore } from "redux";

function LocationReducer(state = { value: "Tel%20Aviv", results: [] }, action) {
  switch (action.type) {
    case "LocationQuery":
      const query = "";

      const getWeather = async () => {
        const key = "ESB92vSyAzvdougQnAYADVpNntkA9QzC";
        const response = await fetch(
          `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${state.value}`
        );
        const data = await response.json();

        console.log(response);
      };
      getWeather();
      return { value: { query } };
    default:
      return state;
  }
}
const store = createStore(LocationReducer, ["Use Redux"]);
store.dispatch({ type: "LocationReducer" });

export default LocationReducer;
