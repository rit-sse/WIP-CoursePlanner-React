// @flow

export class ColorModel {
  dept: string;
  color: string;

  constructor(
    dept: string = 'DEPT',
    color: string = 'rgb(12, 148, 0)',
  ) {
    this.dept = dept;
    this.color = color;
  }

}
