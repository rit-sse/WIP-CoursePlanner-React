// @flow

import { Course } from './Course';

export class Term {
  title: string;
  courses: Array<Course>;

  constructor(
    title: string = 'Fall',
    courses: Array<Course> = [],
  ){
    this.title = title;
    this.courses = courses;
  }

  addCourse(
    name: string = 'A New Course',
    dept: string = 'DEPT',
    num: string = '000',
    credits: number = 0,
    prereqs: Array<Course> = [],
  ){
    this.courses.push(new Course(name, dept, num, credits, prereqs));
  }

  removeCourse(course: Course){
    this.courses = this.courses.filter(thisCourse =>  JSON.stringify(course) !== JSON.stringify(thisCourse));
  }
}
