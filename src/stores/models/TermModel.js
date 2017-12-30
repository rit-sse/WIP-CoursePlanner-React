import { action, observable } from 'mobx';
import { serializable, identifier, list, object } from 'serializr';
import { CourseModel } from './CourseModel';
import { ID } from '../../utils/id';

export class TermModel {

  @observable
  @serializable
  title = '';

  @observable
  @serializable(identifier())
  id = '';

  @observable
  @serializable(list(object(CourseModel)))
  courses = [];

  constructor(
    title = 'Fall',
  ) {
    this.title = title;
    this.id = ID();
  }

  @action.bound setTitle({ title }) {
    this.title = title;
  }

  @action.bound addCourse(
    name = 'A New Course',
    dept = 'DEPT',
    num = '101',
    credits = 3,
    prereqs = [],
  ) {
    this.courses.push(new CourseModel(name, dept, num, credits, prereqs));
    this.id = ID();
  }

  @action.bound removeCourse(course) {
    this.courses.remove(course);
  }
}
