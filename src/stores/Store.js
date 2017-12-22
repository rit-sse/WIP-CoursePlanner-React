// @flow

import { observable, computed } from 'mobx';
import Plan from './models/Plan';

export class Store {

  @observable mainPlan = new Plan();
  
}
