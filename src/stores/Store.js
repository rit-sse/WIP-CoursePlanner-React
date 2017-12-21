import { observable, computed } from 'mobx';
import Order from './Order';

class Store {

  @observable orders = [];
  nameField;
  ValField;

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
