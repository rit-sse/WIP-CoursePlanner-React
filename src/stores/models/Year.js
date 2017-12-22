// @flow

import { Term } from './Term';
import { Course } from './Course';

export class Year {
  title: string;
  terms: Array<Term>;

  constructor(
    title: string = '2000',
    terms: Array<Term> = [],
  ) {
    this.title = title;
    this.terms = terms;
  }

  addTerm(
    title: string = 'Fall',
    courses: Array<Course> = [],
  ) {
    this.terms.push(new Term(title, courses));
  }
}

