import React from 'react';
import { render } from 'react-dom';
import { Store } from './stores/Store';
import { App } from './components/App';
import a11y  from 'react-a11y';
import 'bootstrap/dist/css/bootstrap.css';

const env = process.env.NODE_ENV;
const store = new Store();

fetch('/api/plan/all')
  .then((response) => response.json())
  .then((plans) => {
    store.loadPlan(plans[0]._id);
  });
window.store = store;

if(env === 'dev') {
  a11y(React);
}

render(
  <App store={store} />,
  document.getElementById('root')
);
