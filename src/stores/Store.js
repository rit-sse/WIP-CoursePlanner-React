// @flow

import { observable } from 'mobx';
import { PlanModel } from './models/PlanModel';

export class Store {

  @observable mainPlan: PlanModel = new PlanModel();

  constructor() {
    this.mainPlan.addYear();
    this.mainPlan.years[0].addTerm();
    this.mainPlan.years[0].terms[0].addCourse();
    this.mainPlan.years[0].terms[0].addCourse();
    this.mainPlan.years[0].terms[0].addCourse();
  }

}
