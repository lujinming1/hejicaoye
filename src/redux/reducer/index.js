import { combineReducers } from 'redux'
import screen from './screenReducer';
import toAdmin from './adminReducer';
import Login from './login/loginReducer';
import Common from './loadingReducer'
const rootReducer = combineReducers({screen, toAdmin, Common, Login});

export default rootReducer;
