import React from 'react';
import { observer } from 'mobx-react';
import { Workspace } from './Workspace';
import { Navigation } from './Navigation';
import '../styles/main.scss';

export const App = observer(({ store }) => (
  <div>
    <Navigation store={store} />
    <Workspace store={store} />
  </div>
));

App.displayName = 'App';
