import React from 'react';
import { Provider } from 'mobx-react';
import { Workspace } from './Workspace';
import { Navigation } from './Navigation';
import '../styles/main.scss';

export const App = ({ store }) => (
  <Provider store={store}>
    <div>
      <Navigation />
      <Workspace />
    </div>
  </Provider>
);

App.displayName = 'App';
