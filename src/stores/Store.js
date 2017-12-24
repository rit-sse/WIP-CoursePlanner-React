// @flow

import { observable } from 'mobx';
import { Plan } from './models/Plan';

export class Store {

  @observable mainPlan: Plan = new Plan();

}
