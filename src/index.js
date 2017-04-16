import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadTest} from './actions/testActions';
// import {loadHobbies} from './actions/hobbyActions';

const store = configureStore();

store.dispatch(loadTest());
// store.dispatch(loadHobbies());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
