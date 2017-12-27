// @flow

import React from 'react';
import { Observer } from 'mobx-react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { Course } from './Course';
import '../styles/objects.Term.scss';

export const Term = ({ store, courses, termIndex, yearIndex }) => {
  const term = store.mainPlan.years[yearIndex].terms[termIndex];
  return (
    <Draggable
      draggableId={term.id}
      type="YEAR-TERM"
    >
      {(draggableProvided, draggableSnapshot) => (
        <div
          {...draggableProvided.dragHandleProps}
          className="term"
          ref={draggableProvided.innerRef}
          style={{
            ...draggableProvided.draggableStyle,
            opacity: draggableSnapshot.isDragging ? '.5' : '1',
          }}
        >
          <Droppable
            droppableId={term.id}
            type="TERM-COURSE"
          >
            {(droppableProvided, droppableSnapshot) => (
              <Observer>
                {() => (
                  <div
                    className="TERM-COURSE-DROPPABLE"
                    ref={droppableProvided.innerRef}
                    style={{
                      backgroundColor: droppableSnapshot.isDraggingOver ? 'lightyellow' : 'white',
                    }}
                  >
                    <div
                      className="title"
                    >
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
                    {droppableProvided.placeholder}
                  </div>
                )}
              </Observer>
            )}
          </Droppable>
          {draggableProvided.placeholder}
        </div>
      )}
    </Draggable>
  );
};

Term.displayName = 'Term';
