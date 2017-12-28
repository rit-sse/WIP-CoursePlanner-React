// @flow

import React from 'react';
import { Observer } from 'mobx-react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { Course } from './Course';
import '../styles/objects.Term.scss';

export const Term = ({ term, colorScheme }) => {
  return (
    <div className="term">
      <Draggable
        draggableId={term.id}
        type="YEAR-TERM"
      >
        {(draggableProvided, draggableSnapshot) => (
          <div
            {...draggableProvided.dragHandleProps}
            className="term-box"
            ref={draggableProvided.innerRef}
            style={{
              ...draggableProvided.draggableStyle,
              opacity: draggableSnapshot.isDragging ? '.5' : '1',
              cursor: draggableSnapshot.isDragging ? 'grabbing' : 'default',
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
                        {term.courses.reduce(
                          (acc, thisCourse) => {
                            if (thisCourse) {
                              return acc + thisCourse.credits;
                            } else {
                              return acc;
                            }
                          }, 0)
                        } Credits
                      </div>
                      {term.courses.map(
                        course => <Course
                          colorScheme={colorScheme}
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
    </div>
  );
};

Term.displayName = 'Term';
