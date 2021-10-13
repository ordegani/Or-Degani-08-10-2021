import { createStore } from "redux";

function LocationReducer(state = { value: "Tel Aviv", results:[] }, action) {
  
  switch (action.type) {
    case "LocationQuery":
      const query = "";

      const getWeather = async () => {
        const key='Uc9kVWewJlSYXyFkbmILsnpmWj16RD8p'
        const response = await fetch(
          `http://dataservice.accuweather.com/currentconditions/v1/${state.value}?apikey=${key}&language=en`
        );
        const data = await response.json();


          console.log(data.hits);

      };
      getWeather();
      return { value: {query} };
      default:
      return state;
  }
}


export default LocationReducer;
