import { CourseModel } from '../stores/models/CourseModel';
import { TermModel } from '../stores/models/TermModel';
import { YearModel } from '../stores/models/YearModel';

export const swen101 = new CourseModel(
  'Software Engineering Seminar',
  'SWEN',
  '101',
  1,
  false,
  []
);

export const swen250 = new CourseModel(
  'Personal Software Engineering',
  'SWEN',
  '250',
  3,
);

export const swen261 = new CourseModel(
  'Intro to Software Engineering',
  'SWEN',
  '261',
  4,
  false,
  [swen101, swen250]
);

export const math181 = new CourseModel(
  'Project Based Calculus One',
  'MATH',
  '181',
  4,
);

export const math182 = new CourseModel(
  'Project Based Calculus Two',
  'MATH',
  '182',
  4,
  false,
  [math181]
);

export const math190 = new CourseModel(
  'Discrete Math for Computing',
  'MATH',
  '190',
  3
);

export const fall = new TermModel('fall')
fall.addCourse(swen101);
fall.addCourse(swen250);
fall.addCourse(math181);

export const spring = new TermModel('spring')
spring.addCourse(swen261);
spring.addCourse(math182);
spring.addCourse(math190);

export const firstYear = new YearModel(
  'First Year',
  [fall, spring]
);

