// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { Droppable } from 'react-beautiful-dnd';
import { Course } from './Course';
import '../styles/objects.Term.scss';

export const Term = observer( props => (
  <Droppable droppableId={props.term.id} type="TERM">
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        style={{
          backgroundColor: snapshot.isDraggingOver ? 'lightyellow' : 'white',
        }}
        className="term"
      >
        <div className="title">
          {props.term.title}
        </div>
        <div className="credits-sum">
          {props.term.courses.reduce(
            (acc, thisCourse) => {
              if (thisCourse) {
                return acc + thisCourse.credits;
              } else {
                return acc;
              }
            }, 0)
          } Credits
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
