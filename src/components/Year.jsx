// @flow

import React from 'react';
import { Observer } from 'mobx-react';
import { Droppable } from 'react-beautiful-dnd';
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';
import { Term } from './Term';
import '../styles/objects.Year.scss';

export const Year = ({ store, yearIndex, termIndex }) => {
  const year = store.mainPlan.years[yearIndex];
  return (
    <Droppable droppableId={year.id} type="YEAR-TERM" direction="horizontal">
      {(provided, snapshot) => (
        <Observer>
          {() => (
            <Card className="year">
              <CardHeader className="title">{year.title}</CardHeader>
              <div
                className="YEAR-TERM-DROPPABLE"
                ref={provided.innerRef}
                style={{
                  backgroundColor: snapshot.isDraggingOver ? 'lightyellow' : 'white',
                }}
              >
                <CardBody>
                  {year.terms.map(
                    (term, termIndex) =>
                    <Term
                      key={term.id}
                      courses={term.courses}
                      termIndex={termIndex}
                      yearIndex={yearIndex}
                      store={store}
                    />
                  )}
                  {provided.placeholder}
                </CardBody>
              </div>
            </Card>
          )}
        </Observer>
      )}
    </Droppable>
  );
};

Year.displayName = 'Year';
