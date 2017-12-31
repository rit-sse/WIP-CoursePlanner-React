import React from 'react';
import { Observer } from 'mobx-react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { Course } from './Course';
import { Button } from 'reactstrap';
import { RIEInput } from 'riek';
import { inlineValidate } from '../utils/inlineValidate';
import '../styles/objects.Term.scss';
import '../styles/utilities.InlineEdit.scss';

export const Term = ({ term }) => {
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
                        <RIEInput
                          value={term.title}
                          change={({ title }) => { term.setTitle(title); }}
                          propName="title"
                          classEditing="term-title-editing-box inline-editing"
                          validate={inlineValidate}
                        />
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
                          course={course}
                          key={course.id}
                        />
                      )}
                      {droppableProvided.placeholder}
                      <Button
                        color="link"
                        onClick={() => term.addCourse()}
                      >+</Button>
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
