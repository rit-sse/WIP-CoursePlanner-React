import { serializable, identifier } from 'serializr';
import { ID } from '../../utils/id';

export class PrereqCourse {

  @serializable
  dept;

  @serializable
  num;

  @serializable(identifier())
  id;

  constructor(dept, num) {
    this.dept = dept;
    this.num = num;
    this.id = ID();
  }

}
