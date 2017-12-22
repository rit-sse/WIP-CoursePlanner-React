import Course from './Course';

export default class Term {

  title;
  courses = [];

  constructor(title) {
    this.title = title;
  }
  
  addCourse(...args) {
    if (args[0] instanceof Course) {
      this.courses.push(args[0]);
      return;
    }
    this.courses.push(new Course(...args));
  }
}
