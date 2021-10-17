import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import LocationQuery from "./actions";
import LocationSearch from "./actions";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App({query}) {
  const dispatch = useDispatch();
  const locationReducer = useSelector((state) => state.locationReducer);
  return (
    <div className="app">
      <h1>Choose location: {locationReducer.value}</h1>
      <form className="search-form" onSubmit={dispatch(LocationSearch())} >
        <input value={query} type="text"/>
        <button onClick={() => dispatch(LocationQuery())} className="search-button" type="Submit">
          Search
        </button>
      {/* <button onClick={() => dispatch(LocationQuery())}>search</button> */}
      </form>
      <div className="resultsContainer"></div>
    </div>
  );
}

export default App;
