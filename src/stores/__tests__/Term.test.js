import { TermModel } from '../models/TermModel';
import {swen101, swen250, swen261} from './stubCourses';

describe('A Term', () => {
  let myTerm: TermModel = new TermModel();

  beforeEach(() => {
    myTerm = new TermModel();
  });

  it('should be empty be default', () => {
    expect(myTerm.courses).toEqual([]);
  });


  it('should be able to add a new course with addCourse', () => {
    myTerm.addCourse(
      swen101.name,
      swen101.dept,
      swen101.num,
      swen101.credits,
      swen101.prereqs
    );
    expect(myTerm.courses).toEqual([swen101]);
  });

  it('should be able to remove a course given a reference to it', () => {
    // add some courses to a Term
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

    myTerm.addCourse(
      swen261.name,
      swen261.dept,
      swen261.num,
      swen261.credits,
      swen261.prereqs
    );

    expect(myTerm.courses).toEqual([swen101, swen250, swen261]);

    myTerm.removeCourse(swen261);

    expect(myTerm.courses).toEqual([swen101, swen250]);

    myTerm.removeCourse(swen250);

    expect(myTerm.courses).toEqual([swen101]);

    myTerm.removeCourse(swen101);

    expect(myTerm.courses).toEqual([]);
  });

});
