// @flow

import { observable } from 'mobx';
import { ID } from '../../utils/id';

export class CourseModel {
  @observable name = '';
  @observable id = '';
  @observable dept = '';
  @observable num = '';
  @observable credits = 0;
  @observable prereqs = [];

  constructor(
    name = 'A New Course',
    dept = 'DEPT',
    num  = '000',
    credits = 3,
    prereqs = [],
  ) {
    this.name = name;
    this.dept = dept;
    this.num = num;
    this.credits = credits;
    this.prereqs = prereqs;
    this.id = ID();
  }

}
