// @flow

import { action, observable } from 'mobx';
import { CourseModel } from './CourseModel';
import { ID } from '../../utils/id';

export class TermModel {
  @observable title = '';
  @observable id = '';
  @observable courses = [];

  constructor(
    title = 'Fall',
  ) {
    this.title = title;
    this.id = ID();
  }

  @action.bound setTitle(newTitle) {
    this.title = newTitle.title;
  }

  @action.bound addCourse(
    name = 'A New Course',
    dept = 'DEPT',
    num = '101',
    credits = 3,
    prereqs = [],
  ) {
    this.courses.push(new CourseModel(name, dept, num, credits, prereqs));
  }

  @action.bound removeCourse(course) {
    this.courses.remove(course);
  }
}
