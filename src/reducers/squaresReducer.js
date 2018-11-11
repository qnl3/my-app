import * as types from '../actions/actionTypes';
import initialState from '../reducers/initialState';

const squaresReduce = function( state = initialState.squares, action ) {
  switch ( action.type ) {
    case types.LOAD_SQUARES_SUCCESS:
      return action.squares
    case types.UPDATE_SQUARES_SUCCESS:
      let new_state = Object.assign([], state);
      new_state[action.index] = action.value;
      return new_state;
    default:
      return state;
  }
}

export default squaresReduce;
