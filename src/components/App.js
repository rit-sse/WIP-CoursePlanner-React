// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Year } from './Year';
import '../styles/main.scss';

export const App = observer(({ store }) => (
  <DragDropContext
    onDragEnd={store.mainPlan.handleDragDrop.bind(store.mainPlan)}
  >
    {store.mainPlan.years.map(
      (year, yearIndex) =>  <Year
        key={year.id}
        store={store}
        yearIndex={yearIndex}
      />
    )}
  </DragDropContext>
));

App.displayName = 'App';
