// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { Term } from './Term';
import '../styles/objects.Year.scss';

export const Year = observer( ({ store, yearIndex, termIndex }) => {
  const year = store.mainPlan.years[yearIndex];
  return (<div className="year">
    <div className="title">{year.title}</div>
    {year.terms.map(
      (term, termIndex) => <Term
        key={term.id}
        courses={term.courses}
        termIndex={termIndex}
        yearIndex={yearIndex}
        store={store}
      />
    )}
  </div>);
});

Year.displayName = 'Year';
