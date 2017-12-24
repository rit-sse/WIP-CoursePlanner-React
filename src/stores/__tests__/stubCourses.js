import { CourseModel } from '../models/CourseModel';

export const swen101 = new CourseModel(
  'Software Engineering Seminar',
  'SWEN',
  '101',
  1
);

export const swen250 = new CourseModel(
  'Personal Software Engineering',
  'SWEN',
  '250',
  3
);

export const swen261 = new CourseModel(
  'Intro to Software Engineering',
  'SWEN',
  '261',
  4,
  [swen101, swen250]
);
