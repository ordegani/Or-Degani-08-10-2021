import { combineReducers } from 'redux'
import  locationReducer  from './locationReducer';
import savedReducer
 from './savedReducer';
export default combineReducers({
locationReducer,
savedReducer
})

store.dispatch({ type: "combineReducers" });