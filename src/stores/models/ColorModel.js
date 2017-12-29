import { observable } from 'mobx';
import { serializable, identifier } from 'serializr';
import { ID } from '../../utils/id';

export class ColorModel {

  @observable
  @serializable
  dept = '';

  @observable
  @serializable
  color = '';

  @observable
  @serializable(identifier())
  id;

  constructor(
    dept = 'DEPT',
    color  = 'rgb(12, 148, 0)',
  ) {
    this.dept = dept;
    this.color = color;
    this.id = ID();
  }

}
