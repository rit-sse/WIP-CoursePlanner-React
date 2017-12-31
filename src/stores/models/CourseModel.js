import { action, observable } from 'mobx';
import { serializable, identifier, list, object } from 'serializr';
import { PrereqCourse } from './PrereqCourse';
import { ID } from '../../utils/id';

export class CourseModel {

  @observable
  @serializable
  name = '';

  @observable
  @serializable
  isPlaceholder = false;

  @observable
  @serializable(identifier())
  id = '';

  @observable
  @serializable
  dept = '';

  @observable
  @serializable
  num = '';

  @observable
  @serializable
  credits = 0;

  @observable
  @serializable(list(object(PrereqCourse)))
  prereqs = [];

  constructor(
    name = 'A New Course',
    dept = 'DEPT',
    num  = '000',
    credits = 3,
    isPlaceholder = false,
    prereqs = [],
  ) {
    this.name = name;
    this.dept = dept;
    this.num = num;
    this.credits = credits;
    this.isPlaceholder = isPlaceholder;
    this.prereqs = prereqs;
    this.id = ID();
  }

  @action.bound setName(newName) {
    this.name = newName;
  }

  @action.bound setDept(newDept) {
    this.dept = newDept;
  }

  @action.bound setNum(newNum) {
    this.num = newNum;
  }

  @action.bound setCredits(newCredits) {
    this.credits = newCredits;
  }

  @action.bound setPrereqs(newPrereqs) {
    this.prereqs.replace(newPrereqs);
  }

  @action.bound toggleIsPlaceholder() {
    this.isPlaceholder = !this.isPlaceholder;
  }

  @action.bound setIsPlaceholder(newState) {
    this.isPlaceholder = newState;
  }

  @action removePrereq(prereq) {
    this.prereqs.remove(prereq);
  }

  getCourseCode() {
    return `${this.dept}-${this.num}`;
  }

}
