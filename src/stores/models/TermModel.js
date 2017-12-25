// @flow

import { observable } from 'mobx';
import { CourseModel } from './CourseModel';
import { ID } from '../../utils/id';

export class TermModel {
  @observable title = '';
  @observable id = '';
  @observable courses = [];

  constructor(
    title = 'Fall',
    courses = [],
  ) {
    this.title = title;
    this.courses = courses;
    this.id = ID();
  }

  addCourse(
    name = 'A New Course',
    dept = 'DEPT',
    num = '000',
    credits = 3,
    prereqs = [],
  ) {
    this.courses.push(new CourseModel(name, dept, num, credits, prereqs));
  }
}
