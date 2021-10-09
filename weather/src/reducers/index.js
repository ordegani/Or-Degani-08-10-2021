import { combineReducers } from 'redux'
import  locationReducer  from './reducers/locationReducer';
import  savedReducer from './reducers/savedReducer';

export default combineReducers({
locationReducer,
savedReducer
})