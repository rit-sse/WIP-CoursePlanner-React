// @flow

import { observable } from 'mobx';
import { PlanModel } from './models/PlanModel';

export class Store {

  @observable mainPlan = new PlanModel();

  constructor() {
    this.mainPlan.addYear();
    this.mainPlan.years[0].addTerm();
    this.mainPlan.years[0].terms[0].addCourse('Intro to SE', 'SWEN', '261', 3);
    this.mainPlan.years[0].terms[0].addCourse('Computer Science One', 'CSCI', '141', 4);
    this.mainPlan.years[0].terms[0].addCourse('Project Based Calculus One', 'MATH', '141', 4);
    this.mainPlan.addColor('SWEN', 'blue');
    this.mainPlan.addColor('CSCI', 'green');
    this.mainPlan.addColor('MATH', 'red');
  }

}
