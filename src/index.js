import React from 'react';
import { render } from 'react-dom';
import { Store } from './stores/Store';
import { App } from './components/App';
import a11y  from 'react-a11y';
import 'bootstrap/dist/css/bootstrap.css';
import { SE } from './seed/SE';

const env = process.env.NODE_ENV;
const store = new Store();

// FOR DEVELOPMENT ONLY,
// DELETE THIS BEFORE RELEASE
store.seed(SE);
window.store = store;

if(env === 'dev') {
  a11y(React);
}

render(
  <App store={store} />,
  document.getElementById('root')
);
