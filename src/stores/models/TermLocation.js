// @flow

import { observable } from 'mobx';

export class TermLocation {
  @observable termRef;
  @observable yearIndex = -1;
  @observable termIndex = -1;

  constructor(
    termRef,
    yearIndex = -1,
    termIndex = -1,
  ) {
    this.termRef = termRef;
    this.yearIndex = yearIndex;
    this.termIndex = termIndex;
  }
}
