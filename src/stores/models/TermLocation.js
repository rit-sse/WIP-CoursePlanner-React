import { observable } from 'mobx';
import { serializable, identifier, reference } from 'serializr';
import { ID } from '../../utils/id';
import { TermModel } from './TermModel';

export class TermLocation {

  @observable
  @serializable(reference(TermModel))
  termRef;

  @observable
  @serializable
  yearIndex = -1;

  @observable
  @serializable
  termIndex = -1;

  @observable
  @serializable(identifier())
  id;

  constructor(
    termRef,
    yearIndex = -1,
    termIndex = -1,
  ) {
    this.termRef = termRef;
    this.yearIndex = yearIndex;
    this.termIndex = termIndex;
    this.id = ID();
  }
}
