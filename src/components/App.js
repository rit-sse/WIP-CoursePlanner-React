// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { Store } from '../stores/Store';
import { Course } from './Course';
import { CourseModel } from '../stores/models/CourseModel';
import '../styles/main.scss';

type Props = {
  store: Store
};

const myFirstCourse = new CourseModel();

const App = (props: Props) => (
  <React.Fragment>
    <Course colorScheme={props.store.mainPlan.colorScheme} course={myFirstCourse} />
  </React.Fragment>
);

export default observer(App);
