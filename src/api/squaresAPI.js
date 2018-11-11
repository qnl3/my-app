import initialState from '../reducers/initialState';

class SquaresAPI {
  static getAllSquares() {
    return fetch('http://localhost/api/v1/squares').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    })
  }
}

export class MocSquaresAPI {
  static getAllSquares() {
    return Promise.resolve(initialState.squares);
  }
}
export default SquaresAPI;
