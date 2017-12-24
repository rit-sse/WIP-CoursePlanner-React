// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { Droppable } from 'react-beautiful-dnd';
import { Store } from '../stores/Store';
import { TermModel } from '../stores/models/TermModel';
import { Course } from './Course';
import '../styles/objects.Term.scss';

type Props = {
  store: Store,
  term: TermModel,
};

export const Term = observer( (props: Props) => (
  <Droppable droppableId={props.term.id} type="TERM">
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        style={{
          backgroundColor: snapshot.isDraggingOver ? 'lightblue' : 'white',
        }}
        className="term"
      >
        <div className="title">
          {props.term.title}
        </div>
        <div className="credits-sum">
          {props.term.courses.reduce((acc, course) => acc + course.credits, 0)} Credits
        </div>
        {props.term.courses.map(
          course => <Course
            colorScheme={props.store.mainPlan.colorScheme}
            course={course}
            key={course.id}
          />
        )}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
));
