import {SMALL_SCREEN} from '../constants/screenConst';


export function smallScreen(isSmall){
  return {
    type: SMALL_SCREEN,
    isSmall
  }
}
function shouldSmallScreen(state, isSmall){
    const curScreen = state.screen['isSmall'];
    if(curScreen === isSmall){
      return false;
    } else {
      return true;
    }
}

export function smallScreenIfNeeded(isSmall){
  return (dispatch, getState) => {
    if(shouldSmallScreen(getState(), isSmall)){
      return dispatch(smallScreen(isSmall));
    }
  }
}
