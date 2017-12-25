// @flow

import { observable } from 'mobx';

export class CourseLocation {
  @observable courseRef;
  @observable yearIndex = -1;
  @observable termIndex = -1;
  @observable courseIndex = -1;

  constructor(
    courseRef,
    yearIndex = -1,
    termIndex = -1,
    courseIndex = -1,
  ) {
    this.courseRef = courseRef;
    this.yearIndex = yearIndex;
    this.termIndex = termIndex;
    this.courseIndex = courseIndex;
  }
}
