import { Course } from '../models/Course';

export const swen101 = new Course(
  'Software Engineering Seminar',
  'SWEN',
  '101',
  1
);

export const swen250 = new Course(
  'Personal Software Engineering',
  'SWEN',
  '250',
  3
);

export const swen261 = new Course(
  'Intro to Software Engineering',
  'SWEN',
  '261',
  4,
  [swen101, swen250]
);
