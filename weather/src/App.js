import './App.css';
import {useSelector} from 'react-redux';

function App() {
  const locationReducer = useSelector(state => state.locationReducer);
  return(
  <div className="app">
    <h1>{locationReducer}</h1>
  </div>
  );
}

export default App;
