import { combineReducers } from 'redux'
import calCounter from './calCounter'
import calLog from './calLog'


const allReducers=combineReducers({
  calCounter:calCounter,
  calLog:calLog
});

export default allReducers;
