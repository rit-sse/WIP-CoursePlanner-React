// @flow

import { YearModel } from './YearModel';
import { ColorModel } from './ColorModel';
import { TermModel } from './TermModel';

export class PlanModel {
  title: string;
  isPublic: boolean;
  colorScheme: Array<ColorModel>;
  years: Array<YearModel>;

  constructor(
    title: string = 'My New Course Plan',
    isPublic: boolean = false,
    colorScheme: Array<ColorModel> = [],
    years: Array<YearModel> = [],
  ) {
    this.title = title;
    this.isPublic = isPublic;
    this.years = years;
    this.colorScheme = colorScheme;
    this.colorScheme.push(new ColorModel());
  }

  addYear(
    title: string = '2000',
    terms: Array<TermModel> = [],
  ) {
    this.years.push(new YearModel(title, terms));
  }
}

