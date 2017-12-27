// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { Plan } from './Plan';
import '../styles/objects.Workspace.scss';

export const Workspace = observer(({ store }) => (
  <div className="workspace">
    <Plan plan={store.mainPlan} />
  </div>
));

Workspace.displayName = 'Workspace';
