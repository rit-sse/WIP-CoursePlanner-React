import { observable } from 'mobx';
import { serializable, identifier, list, reference, getDefaultModelSchema } from 'serializr';
import { ID } from '../../utils/id';

export class CourseModel {

  @observable
  @serializable
  name = '';

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
  prereqs = [];

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
    getDefaultModelSchema(CourseModel).props.prereqs = list(
      reference(CourseModel)
    );
  }

}
