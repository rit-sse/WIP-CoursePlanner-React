// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { Plan } from './Plan';
import '../styles/main.scss';

export const App = observer(({ store }) => (
  <Plan store={store} />
));

App.displayName = 'App';
