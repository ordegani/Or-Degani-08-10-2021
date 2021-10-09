import './App.css';
import {useSelector} from 'react-redux';

const locationReducer = useSelector(state => state.location)
function App() {
  <div className="app">
    <h1>{locationReducer}</h1>
  </div>
}

export default App;
