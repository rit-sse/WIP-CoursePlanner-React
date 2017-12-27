// @flow

import React from 'react';
import { Observer } from 'mobx-react';
import { Droppable } from 'react-beautiful-dnd';
import { Course } from './Course';
import '../styles/objects.Term.scss';

export const Term = ({ store, courses, termIndex, yearIndex }) => {
  const term = store.mainPlan.years[yearIndex].terms[termIndex];
  return (<Droppable droppableId={term.id} type="TERM">
    {(provided, snapshot) => (
      <Observer>
        {() => (
          <div
            ref={provided.innerRef}
            style={{
              backgroundColor: snapshot.isDraggingOver ? 'lightyellow' : 'white',
            }}
            className="term"
          >
            <div className="title">
              {term.title}
            </div>
            <div className="credits-sum">
              {courses.reduce(
                (acc, thisCourse) => {
                  if (thisCourse) {
                    return acc + thisCourse.credits;
                  } else {
                    return acc;
                  }
                }, 0)
              } Credits
            </div>
            {courses.map(
              course => <Course
                colorScheme={store.mainPlan.colorScheme}
                course={course}
                key={course.id}
              />
            )}
            {provided.placeholder}
          </div>
        )}
      </Observer>
    )}
  </Droppable>);
};

Term.displayName = 'Term';
