import { observable } from 'mobx';
import { serializable, identifier, reference } from 'serializr';
import { CourseModel } from './CourseModel';
import { ID } from '../../utils/id';

export class CourseLocation {

  @observable
  @serializable(reference(CourseModel))
  courseRef;

  @observable
  @serializable
  yearIndex = -1;

  @observable
  @serializable
  termIndex = -1;

  @observable
  @serializable
  courseIndex = -1;

  @observable
  @serializable(identifier())
  id;

  constructor(
    courseRef,
    yearIndex = -1,
    termIndex = -1,
    courseIndex = -1,
  ) {
    this.courseRef = courseRef;
    this.yearIndex = yearIndex;
    this.termIndex = termIndex;
    this.courseIndex = courseIndex;
    this.id = ID();
  }
}
