import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/Game';
import { loadSquares } from './actions/squaresActions';

const store = configureStore();

store.dispatch(loadSquares());

render (
  (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  ), document.getElementById('root')
);
