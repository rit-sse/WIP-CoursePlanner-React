// @flow

import { Year } from './Year';
import { Color } from './Color';
import { Term } from './Term';

export class Plan {
  title: string;
  isPublic: boolean;
  colorScheme: Array<Color>;
  years: Array<Year>;

  constructor(
    title: string = 'My New Course Plan',
    isPublic: boolean = false,
    colorScheme: Array<Color> = [],
    years: Array<Year> = [],
  ) {
    this.title = title;
    this.isPublic = isPublic;
    this.colorScheme = colorScheme;
    this.years = years;
  }

  addYear(
    title: string = '2000',
    terms: Array<Term> = [],
  ) {
    this.years.push(new Year(title, terms));
  }
}

