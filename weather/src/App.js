import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import LocationQuery from "./actions";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const locationReducer = useSelector((state) => state.locationReducer);
  return (
    <div className="app">
      <h1>Choose location: {locationReducer.value}</h1>
      <button onClick={() => dispatch(LocationQuery())}>search</button>
      <div className="resultsContainer"></div>
    </div>
  );
}

export default App;
