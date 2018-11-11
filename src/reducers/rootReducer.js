import {combineReducers} from 'redux';
import squares from './squaresReducer';

const rootReducer = combineReducers({
  squares
})

export default rootReducer;
