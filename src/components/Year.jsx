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
    <Card className="year">
      <CardHeader className="title">{year.title}</CardHeader>
      <CardBody>
        {year.terms.map(
          (term, termIndex) => <Term
            key={term.id}
            courses={term.courses}
            termIndex={termIndex}
            yearIndex={yearIndex}
            store={store}
          />
        )}
      </CardBody>
    </Card>
  );
};

Year.displayName = 'Year';
