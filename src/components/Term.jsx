// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { Store } from '../stores/Store';
import { TermModel } from '../stores/models/TermModel';
import { Course } from './Course';
import '../styles/objects.Term.scss';

type Props = {
  store: Store,
  term: TermModel,
};

export const Term = observer( (props: Props) => (
  <div className="term">
    <div className="title">
      {props.term.title}
    </div>
    <div className="credits-sum">
      {props.term.courses.reduce((acc, course) => acc + course.credits, 0)} Credits
    </div>
    {props.term.courses.map(
      course => <Course colorScheme={props.store.mainPlan.colorScheme} course={course} />
    )}
  </div>
));
