// @flow

import { TermModel } from './TermModel';
import { CourseModel } from './CourseModel';

export class YearModel {
  title: string;
  terms: Array<TermModel>;

  constructor(
    title: string = '2000',
    terms: Array<TermModel> = [],
  ) {
    this.title = title;
    this.terms = terms;
  }

  addTerm(
    title: string = 'Fall',
    courses: Array<CourseModel> = [],
  ) {
    this.terms.push(new TermModel(title, courses));
  }
}

