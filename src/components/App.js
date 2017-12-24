// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Store } from '../stores/Store';
import { Term } from './Term';
import '../styles/main.scss';

type Props = {
  store: Store
};

export const App = observer((props: Props) => (
  <DragDropContext
    onDragStart={ (result) => {console.log(result);} }
    onDragEnd={ (result) => {console.log(result);} }
  >
    <Term
      store={props.store}
      term={props.store.mainPlan.years[0].terms[0]}
    />
  </DragDropContext>
));
