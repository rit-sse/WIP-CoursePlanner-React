// @flow

import { Year } from './Year';
import { Color } from './Color';

export class Plan {
  title: string;
  public: boolean;
  colorScheme: Array<Color>;
  years: Array<Year>;

  constructor(
    title: string = 'My New Course Plan',
    public: boolean = false,
    colorScheme: Array<Color> = [],
    years: Array<Year> = [],
  ){
    this.title = title;
    this.public = public;
    this.colorScheme = colorScheme;
    this.years = years;
  }

  addYear(
    title: string = '2000',
    terms: Array<Term> = [],
  ){
    this.years.push(new Year(title, terms));
  }
}

