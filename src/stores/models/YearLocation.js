import { observable } from 'mobx';
import { serializable, identifier, reference } from 'serializr';
import { YearModel } from './YearModel';
import { ID } from '../../utils/id';

export class YearLocation {

  @observable
  @serializable(reference(YearModel))
  yearRef;

  @observable
  @serializable
  yearIndex = -1;

  @observable
  @serializable(identifier())
  id;

  constructor(
    yearRef,
    yearIndex = -1,
  ) {
    this.yearRef = yearRef;
    this.yearIndex = yearIndex;
    this.id = ID();
  }
}
