import { TermModel } from '../TermModel';
import { swen101, swen250 } from '../../../seed/stubData';

describe('A Term', () => {
  let myTerm = new TermModel();

  beforeEach(() => {
    myTerm = new TermModel();
  });

  it('should be empty be default', () => {
    expect(myTerm.courses.length).toBe(0);
  });


  it('should be able to add a new course with addCourse()', () => {
    myTerm.addCourse(
      swen101.name,
      swen101.dept,
      swen101.num,
      swen101.credits,
      swen101.prereqs
    );

    expect(myTerm.courses.length).toBe(1);
  });

  it('should be able to remove a course with removeCourse()', () => {
    myTerm.addCourse(
      swen101.name,
      swen101.dept,
      swen101.num,
      swen101.credits,
      swen101.prereqs
    );

    myTerm.addCourse(
      swen250.name,
      swen250.dept,
      swen250.num,
      swen250.credits,
      swen250.prereqs
    );

    expect(myTerm.courses.length).toBe(2);

    myTerm.removeCourse(myTerm.courses[0]);

    expect(myTerm.courses.length).toBe(1);

    myTerm.removeCourse(myTerm.courses[0]);

    expect(myTerm.courses.length).toBe(0);
  });

  it('should be called "Fall" by default', () => {
    expect(myTerm.title).toEqual('Fall');
  });

  it('should be able to have its name set with setTitle()', () => {
    myTerm.setTitle('Spring');
    expect(myTerm.title).toEqual('Spring');
  });

});
