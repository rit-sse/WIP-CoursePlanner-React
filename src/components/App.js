// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { Store } from '../stores/Store';
import { Term } from './Term';
import '../styles/main.scss';

type Props = {
  store: Store
};

export const App = observer((props: Props) => (
  <Term
    store={props.store}
    term={props.store.mainPlan.years[0].terms[0]}
  />
));
