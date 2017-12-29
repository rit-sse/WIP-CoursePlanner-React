// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Plan } from './Plan';
import { Trash } from './Trash';
import '../styles/objects.Workspace.scss';
import '../styles/utilities.grab.scss';

export const Workspace = observer(({ store }) => (
  <div className="workspace">
    <DragDropContext
      onDragEnd={store.mainPlan.handleDragDrop.bind(store.mainPlan)}
    >
      <Plan plan={store.mainPlan} />
      <Trash />
    </DragDropContext>
  </div>
));

Workspace.displayName = 'Workspace';
