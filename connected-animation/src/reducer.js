import { combineReducers } from 'redux';
import { SET_HERO_STARTING_STYLE } from './actionTypes';

const initialState = {
  startingHeroStyle: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  }
};

const style = (state = initialState, action) => {
  switch (action.type) {
    case SET_HERO_STARTING_STYLE:
      return {
        ...state,
        startingHeroStyle: {
          width: action.width,
          height: action.height,
          x: action.x,
          y: action.y
        }
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  style
});

export default rootReducer;
