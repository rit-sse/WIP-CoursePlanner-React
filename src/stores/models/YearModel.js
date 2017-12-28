// @flow

import { action, observable } from 'mobx';
import { TermModel } from './TermModel';
import { ID } from '../../utils/id';

export class YearModel {
  @observable title = '';
  @observable terms = [];
  @observable id = '';

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

