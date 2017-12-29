// @flow

import { action, observable } from 'mobx';
import { PlanModel } from './models/PlanModel';
import { serialize, deserialize } from 'serializr';
import { saveAs } from 'file-saver';

export class Store {

  @observable
  mainPlan = new PlanModel();

  @observable
  saveDropdownOpened = false;

  constructor() {
    this. mainPlan = new PlanModel();
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

    this.mainPlan.addYear('Third Year');
    this.mainPlan.years[2].addTerm();
    this.mainPlan.years[2].addTerm('Spring');

    this.mainPlan.years[2].terms[0].addCourse('Software Engineering Seminar', 'SWEN', '101', 1);
    this.mainPlan.years[2].terms[0].addCourse('Computer Science One', 'CSCI', '141', 4);
    this.mainPlan.years[2].terms[0].addCourse('Project Based Calculus One', 'MATH', '141', 4);

    this.mainPlan.years[2].terms[1].addCourse('Intro to SE', 'SWEN', '261', 3);
    this.mainPlan.years[2].terms[1].addCourse('Computer Science Two', 'CSCI', '142', 4);
    this.mainPlan.years[2].terms[1].addCourse('Project Based Calculus Two', 'MATH', '142', 4);

    this.mainPlan.addYear('Fourth Year');
    this.mainPlan.years[3].addTerm();
    this.mainPlan.years[3].addTerm('Spring');

    this.mainPlan.years[3].terms[0].addCourse('Software Engineering Seminar', 'SWEN', '101', 1);
    this.mainPlan.years[3].terms[0].addCourse('Computer Science One', 'CSCI', '141', 4);
    this.mainPlan.years[3].terms[0].addCourse('Project Based Calculus One', 'MATH', '141', 4);

    this.mainPlan.years[3].terms[1].addCourse('Intro to SE', 'SWEN', '261', 3);
    this.mainPlan.years[3].terms[1].addCourse('Computer Science Two', 'CSCI', '142', 4);
    this.mainPlan.years[3].terms[1].addCourse('Project Based Calculus Two', 'MATH', '142', 4);

    this.mainPlan.addColor('SWEN', 'blue');
    this.mainPlan.addColor('CSCI', 'green');
    this.mainPlan.addColor('MATH', 'red');
  }

  handleFileDrop([file]) {
    const fileReader = new FileReader();
    fileReader.onload = event => {
      const json = event.explicitOriginalTarget.result;
      this.loadJSON(json);
    };
    fileReader.readAsText(file);
  }

  giveUserJSON() {
    const planJson = serialize(this.mainPlan);
    const file = new File([JSON.stringify(planJson)], `myPlan${Date.now()}.json`, {type: 'text/plain;charset=utf-8'});
    saveAs(file);
  }

  @action.bound toggleSaveDropdown() {
    this.saveDropdownOpened = !this.saveDropdownOpened;
  }

  @action.bound loadJSON(json) {
    this.mainPlan = deserialize(PlanModel, json, () => {});
  }

}
