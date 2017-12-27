// @flow

import { PlanModel } from './models/PlanModel';

export class Store {

  mainPlan = new PlanModel();

  constructor() {
    this.mainPlan.addYear('First Year');
    this.mainPlan.years[0].addTerm();
    this.mainPlan.years[0].addTerm('Spring');

    this.mainPlan.years[0].terms[0].addCourse('Software Engineering Seminar', 'SWEN', '101', 1);
    this.mainPlan.years[0].terms[0].addCourse('Computer Science One', 'CSCI', '141', 4);
    this.mainPlan.years[0].terms[0].addCourse('Project Based Calculus One', 'MATH', '141', 4);

    this.mainPlan.years[0].terms[1].addCourse('Intro to SE', 'SWEN', '261', 3);
    this.mainPlan.years[0].terms[1].addCourse('Computer Science Two', 'CSCI', '142', 4);
    this.mainPlan.years[0].terms[1].addCourse('Project Based Calculus Two', 'MATH', '142', 4);

    this.mainPlan.addYear('Second Year');
    this.mainPlan.years[1].addTerm();
    this.mainPlan.years[1].addTerm('Spring');

    this.mainPlan.years[1].terms[0].addCourse('Software Engineering Seminar', 'SWEN', '101', 1);
    this.mainPlan.years[1].terms[0].addCourse('Computer Science One', 'CSCI', '141', 4);
    this.mainPlan.years[1].terms[0].addCourse('Project Based Calculus One', 'MATH', '141', 4);

    this.mainPlan.years[1].terms[1].addCourse('Intro to SE', 'SWEN', '261', 3);
    this.mainPlan.years[1].terms[1].addCourse('Computer Science Two', 'CSCI', '142', 4);
    this.mainPlan.years[1].terms[1].addCourse('Project Based Calculus Two', 'MATH', '142', 4);

    this.mainPlan.addColor('SWEN', 'blue');
    this.mainPlan.addColor('CSCI', 'green');
    this.mainPlan.addColor('MATH', 'red');
  }

}
