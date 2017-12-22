import Term from '../Term';
import {swen101, swen250, swen261} from './stubCourses';

describe('A Term', () => {
  let myTerm;

  beforeEach(() => {
    myTerm = new Term();
  });

  afterEach(() => {
    myTerm = undefined;
  });

  it('should be empty be default', () => {
    expect(myTerm.courses).toEqual([]);
  });

  it('should be able to add a new course with addCourse by passing a Course object', () => {
    myTerm.addCourse(swen101);
    expect(myTerm.courses).toEqual([swen101]);
  });

  it('should be able to add a new course with addCourse by passing constructor params', () => {
    myTerm.addCourse(
      swen101.name,
      swen101.dept,
      swen101.num,
      swen101.credits,
      swen101.prereqs
    );
    expect(myTerm.courses).toEqual([swen101]);
  });
});
