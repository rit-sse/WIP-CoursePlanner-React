import { action, observable } from 'mobx';
import { PlanModel } from './models/PlanModel';
import { CourseModalState } from './models/CourseModalState';
import { serialize, deserialize } from 'serializr';
import { saveAs } from 'file-saver';

export class Store {

  @observable
  mainPlan;

  @observable
  courseModalState;

  @observable
  saveDropdownOpened = false;

  constructor() {
    this.mainPlan = new PlanModel();
    this.courseModalState = new CourseModalState(this.mainPlan);
  }

  handleFileDrop([file]) {
    const fileReader = new FileReader();
    fileReader.onload = event => {
      const json = JSON.parse(event.explicitOriginalTarget.result);
      this.loadJSON(json);
    };
    fileReader.readAsText(file);
  }

  giveUserJSON() {
    const planJson = serialize(this.mainPlan);
    const file = new File([JSON.stringify(planJson)], `myPlan${Date.now()}.json`, {type: 'text/plain;charset=utf-8'});
    saveAs(file);
  }

  @action.bound seed(seedObject) {
    // FOR DEVELOPMENT ONLY
    this.loadJSON(seedObject);
  }

  @action.bound toggleSaveDropdown() {
    this.saveDropdownOpened = !this.saveDropdownOpened;
  }

  @action.bound loadJSON(json) {
    this.mainPlan = deserialize(PlanModel, json, () => {});
    // Because the CourseModalState is instantiated from a class
    // MobX won't keep the reference live during serialization
    this.courseModalState = new CourseModalState(this.mainPlan);
  }

  @action.bound savePlan() {
    fetch('/api/plan/save', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.mainPlan),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
  }
}
