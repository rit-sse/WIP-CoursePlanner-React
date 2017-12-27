// @flow

import { observable } from 'mobx';

export class ColorModel {
  @observable dept = '';
  @observable color = '';

  constructor(
    dept = 'DEPT',
    color  = 'rgb(12, 148, 0)',
  ) {
    this.dept = dept;
    this.color = color;
  }

}
