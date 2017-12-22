import { observable, computed } from 'mobx';
import Plan from './Plan';

class Store {

  @observable mainPlan = {};

  @computed get sum() {
    return this.orders.reduce((sum, curr) => {
      return isNaN(curr.value) ? sum : (sum + curr.value);
    }, 0) || 0;
  }

  addOrder = (name, val) => {
    val = parseFloat(val);
    this.orders.push(new Order(name, val));
  }

  removeOrder = () => {
    this.orders.pop();
  }
  
}

export default Store;
