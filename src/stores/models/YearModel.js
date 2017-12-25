// @flow

import { observable } from 'mobx';
import { TermModel } from './TermModel';

export class YearModel {
  @observable title = '';
  @observable terms = [];

  constructor(
    title= '2000',
    terms = [],
  ) {
    this.title = title;
    this.terms = terms;
  }

  addTerm(
    title = 'Fall',
    courses = [],
  ) {
    this.terms.push(new TermModel(title, courses));
  }
}

