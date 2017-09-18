import {fromJS} from 'immutable';
import {LOADING} from '../constants/dispatchTypes';

const initialState = {
  loading: false
}

const Common = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return fromJS(state).merge({loading: action.loading}).toJS();
    default:
      return state;
  }
}

export default Common;
