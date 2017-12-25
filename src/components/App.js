// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Term } from './Term';
import '../styles/main.scss';

export const App = observer((props) => (
  <DragDropContext
    onDragEnd={props.store.mainPlan.onDragCourseEnd.bind(props.store.mainPlan)}
  >
    <Term
      store={props.store}
      term={props.store.mainPlan.years[0].terms[0]}
    />
  </DragDropContext>
));
