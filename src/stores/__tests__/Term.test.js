import { TermModel } from '../models/TermModel';
import { swen101 } from './stubCourses';

describe('A Term', () => {
  let myTerm: TermModel = new TermModel();

  beforeEach(() => {
    myTerm = new TermModel();
  });

  it('should be empty be default', () => {
    expect(myTerm.courses.length).toBe(0);
  });


  it('should be able to add a new course with addCourse', () => {
    myTerm.addCourse(
      swen101.name,
      swen101.dept,
      swen101.num,
      swen101.credits,
      swen101.prereqs
    );
    expect(myTerm.courses.length).toBe(1);
  });

});
