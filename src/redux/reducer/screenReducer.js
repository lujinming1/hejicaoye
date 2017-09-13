import {SMALL_SCREEN} from '../constants/screenConst';

let initState = document.documentElement.clientWidth < 700 ? true : false;
function screenReducer (state = {isSmall: initState}, action){
  switch (action.type) {
    case SMALL_SCREEN:
      return {isSmall: action.isSmall};
    default:
      return state;

  }
}

export default screenReducer;
