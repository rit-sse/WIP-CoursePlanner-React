import { action, observable } from 'mobx';
import { serializable, identifier, list, object } from 'serializr';
import { TermModel } from './TermModel';
import { ID } from '../../utils/id';

export class YearModel {

  @observable
  @serializable
  title = '';

  @observable
  @serializable(list(object(TermModel)))
  terms = [];

  @observable
  @serializable(identifier())
  id = '';

  constructor(
    title= '2000',
    terms = [],
  ) {
    this.title = title;
    this.terms = terms;
    this.id = ID();
  }

  @action.bound setTitle(newTitle) {
    this.title = newTitle.title;
  }

  @action.bound addTerm(
    title = 'Fall',
    courses = [],
  ) {
    this.terms.push(new TermModel(title, courses));
  }
}

