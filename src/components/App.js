// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { Plan } from './Plan';
import '../styles/main.scss';

export const App = observer(({ store }) => (
  <Plan plan={store.mainPlan} />
));

App.displayName = 'App';
