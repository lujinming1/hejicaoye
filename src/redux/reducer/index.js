import { combineReducers } from 'redux'
import screen from './screenReducer';
import toAdmin from './adminReducer';
const rootReducer = combineReducers({screen, toAdmin});

export default rootReducer;
