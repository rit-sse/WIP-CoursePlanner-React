import { action, observable } from 'mobx';
import { PlanModel } from './models/PlanModel';
import { CourseModalState } from './models/CourseModalState';
import { serialize, deserialize } from 'serializr';
import { saveAs } from 'file-saver';
import { PlanApi } from '../api/plan';
import { AuthApi } from '../api/auth';

export class Store {

  @observable
  mainPlan;

  @observable
  courseModalState;

  @observable
  user;

  constructor() {
    this.mainPlan = new PlanModel();
    this.courseModalState = new CourseModalState(this.mainPlan);
    this.user = null;
  }

  handleFileDrop([file]) {
    const fileReader = new FileReader();
    fileReader.onload = event => {
      const json = JSON.parse(event.explicitOriginalTarget.result);
      this.loadJSON(json);
    };
    fileReader.readAsText(file);
  }

  saveAsJSON() {
    const planJson = serialize(this.mainPlan);
    const file = new File(
      [JSON.stringify(planJson)],
      `myPlan${Date.now()}.json`,
      {type: 'text/plain;charset=utf-8'});

    saveAs(file);
  }

  @action.bound loadJSON(json) {
    this.mainPlan = deserialize(PlanModel, json, () => {});
    // Because the CourseModalState is instantiated from a class
    // MobX won't keep the reference live during serialization
    this.courseModalState = new CourseModalState(this.mainPlan);
  }

  @action.bound loadPlan(id) {
    PlanApi.loadPlan(id)
      .then((updatedPlan) => {
        this.mainPlan = updatedPlan;
      });
  }

  @action.bound savePlan() {
    PlanApi.savePlan(this.mainPlan)
      .then((updatedPlan) => {
        this.mainPlan = updatedPlan;
      });
  }

  @action.bound localLogin(email, password) {
    AuthApi.localLogin(email, password)
      .then((user) => {
        this.user = user;
      });
  }

  @action.bound localRegister(email, password) {
    AuthApi.localRegister(email, password)
      .then((user) => {
        this.user = user;
      });
  }

  @action.bound logout() {
    AuthApi.logout();
    this.user = null;
  }
}
