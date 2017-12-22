import Term from './Term';

export default class Year {

  title;
  terms = [];

  constructor(title) {
    this.title = title;
  }
  
  addTerm(...args) {
    this.courses.push(new Term(...args));
  }
}

