// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { Workspace } from './Workspace';
import '../styles/main.scss';

export const App = observer(({ store }) => (
  <Workspace store={store} />
));

App.displayName = 'App';
