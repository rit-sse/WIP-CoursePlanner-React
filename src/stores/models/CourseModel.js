// @flow

import { ID } from '../../utils/id';

export class CourseModel {
  name: string;
  id: string;
  dept: string;
  num: string; // We never need to do math with this, so we'll leave it as a string
  credits: number;
  prereqs: Array<CourseModel>;

  constructor(
    name: string = 'A New Course',
    dept: string = 'DEPT',
    num: string = '000',
    credits: number = 3,
    prereqs: Array<CourseModel> = [],
  ) {
    this.name = name;
    this.dept = dept;
    this.num = num;
    this.credits = credits;
    this.prereqs = prereqs;
    this.id = ID();
  }

}
