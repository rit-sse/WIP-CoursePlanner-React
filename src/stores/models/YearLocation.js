// @flow

import { observable } from 'mobx';

export class YearLocation {
  @observable yearRef;
  @observable yearIndex = -1;

  constructor(
    yearRef,
    yearIndex = -1,
  ) {
    this.yearRef = yearRef;
    this.yearIndex = yearIndex;
  }
}
