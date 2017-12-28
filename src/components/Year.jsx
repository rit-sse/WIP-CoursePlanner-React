// @flow

import React from 'react';
import { Observer } from 'mobx-react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { Card, CardHeader, CardBody } from 'reactstrap';
import { Term } from './Term';
import '../styles/objects.Year.scss';

export const Year = ({ year, colorScheme }) => {
  return (
    <Draggable
      draggableId={year.id}
      type="PLAN-YEAR"
    >
      {(draggableProvided, draggableSnapshot) => (
        <div>
          <div
            {...draggableProvided.dragHandleProps}
            className="year-box"
            ref={draggableProvided.innerRef}
            style={{
              ...draggableProvided.draggableStyle,
              opacity: draggableSnapshot.isDragging ? '.5' : '1',
            }}
          >
            <Droppable droppableId={year.id} type="YEAR-TERM" direction="horizontal">
              {(droppableProvided, snapshot) => (
                <Observer>
                  {() => (
                    <Card className="year">
                      <CardHeader className="title">{year.title}</CardHeader>
                      <div
                        className="YEAR-TERM-DROPPABLE"
                        ref={droppableProvided.innerRef}
                        style={{
                          backgroundColor: snapshot.isDraggingOver ? 'lightyellow' : 'white',
                        }}
                      >
                        <CardBody className="term-wrapper">
                          {year.terms.map((term) =>
                            <Term
                              key={term.id}
                              courses={term.courses}
                              term={term}
                              colorScheme={colorScheme}
                            />
                          )}
                          {droppableProvided.placeholder}
                        </CardBody>
                      </div>
                    </Card>
                  )}
                </Observer>
              )}
            </Droppable>
          </div>
          {draggableProvided.placeholder}
        </div>
      )}
    </Draggable>
  );
};

Year.displayName = 'Year';
