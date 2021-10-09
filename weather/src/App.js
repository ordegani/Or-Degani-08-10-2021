import './App.css';
import {useSelector} from 'react-redux';
import savedReducer from './reducers/savedReducer';

function App() {
  const savedReducer = useSelector(state => state.savedReducer);
  return(
  <div className="app">
    <h1>{savedReducer}</h1>
  </div>
  );
}

export default App;
