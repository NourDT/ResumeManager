import { combineReducers } from 'redux';
import navState from './navReducer';
import otherReducer from './otherReducer';

const rootReducer = combineReducers({
  navState, otherReducer
});

export default rootReducer;