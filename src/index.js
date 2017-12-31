import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { Store } from './stores/Store';
import { App } from './components/App';
import a11y  from 'react-a11y';
import 'bootstrap/dist/css/bootstrap.css';

const env = process.env.NODE_ENV;
const store = new Store();
window.store = store;

if(env === 'dev') {
  a11y(React);
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
