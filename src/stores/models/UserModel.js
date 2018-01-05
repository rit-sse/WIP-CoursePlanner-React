import { computed, observable } from 'mobx';

export class UserModel {
  @observable
  name;

  @observable
  id;

  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  setName(name) {
    this.name = name;
  }

  setId(id) {
    this.id = id;
  }

  @computed
  get isLoggedIn() {
    return !!this.id;
  }
}
