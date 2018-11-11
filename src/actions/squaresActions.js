import * as types from './actionTypes';
import { MocSquaresAPI as squaresAPI } from '../api/squaresAPI';

export function loadSquares() {
  return function(dispatch) {
    return squaresAPI.getAllSquares().then(squares => {
      dispatch(loadSquaresSuccess(squares));
    }).catch (error => {
      throw(error);
    })
  }
}

export function updateSquares(index, value) {
  return function( dispatch) {
    dispatch(updateSquaresSuccess(index, value))
  }
}

export function loadSquaresSuccess(squares) {
  return { type: types.LOAD_SQUARES_SUCCESS, squares };
}

export function updateSquaresSuccess(index, value) {
  return { type: types.UPDATE_SQUARES_SUCCESS, index: index, value: value };
}
