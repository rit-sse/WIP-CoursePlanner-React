// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Year } from './Year';
import '../styles/main.scss';

export const App = observer(({ store }) => (
  <DragDropContext
    onDragEnd={store.mainPlan.onDragCourseEnd}
  >
    <Year
      store={store}
      yearIndex={0}
    />
  </DragDropContext>
));

App.displayName = 'App';
