// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { Store } from '../stores/Store';
import { Course } from './Course';

type Props = {
  store: Store,
};

export const Term = observer( (props: Props) => (
  <div>
    {props.store.mainPlan.years[0].terms[0].courses.map(
      course => <Course colorScheme={props.store.mainPlan.colorScheme} course={course} />
    )}
  </div>
));
