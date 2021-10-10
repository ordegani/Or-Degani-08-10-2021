import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import LocationQuery from './actions/locationQuery';

function App() {
  const dispatch = useDispatch();
  const locationReducer = useSelector(state => state.locationReducer);
  return(
  <div className="app">
    <h1>Choose location: {locationReducer.value}</h1>
    <button onClick={()=> dispatch(LocationQuery())}>search</button>
  </div>
  );
}

export default App;
