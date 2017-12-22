import Year from './Year';

export default class Plan {

  title;
  public = false;
  colorScheme = [];
  years = [];

  constructor(title) {
    this.title = title;
  }
  
  addYear(...args) {
    this.courses.push(new Year(...args));
  }
}

