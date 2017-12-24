// @flow

import { CourseModel } from './CourseModel';

export class TermModel {
  title: string;
  courses: Array<CourseModel>;

  constructor(
    title: string = 'Fall',
    courses: Array<CourseModel> = [],
  ) {
    this.title = title;
    this.courses = courses;
  }

  addCourse(
    name: string = 'A New Course',
    dept: string = 'DEPT',
    num: string = '000',
    credits: number = 0,
    prereqs: Array<CourseModel> = [],
  ) {
    this.courses.push(new CourseModel(name, dept, num, credits, prereqs));
  }

  removeCourse(course: CourseModel) {
    this.courses = this.courses.filter(thisCourse =>  JSON.stringify(course) !== JSON.stringify(thisCourse));
  }
}
