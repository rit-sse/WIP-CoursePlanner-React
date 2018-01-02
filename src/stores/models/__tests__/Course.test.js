import { swen101, swen250 } from '../../../seed/stubData';
import { observable } from 'mobx';
import { CourseModel } from '../CourseModel';

describe('A Course', () => {
  let myCourse;

  beforeEach(() => {
    myCourse = new CourseModel();
    myCourse.setName(swen250.name);
    myCourse.setDept(swen250.dept);
    myCourse.setNum(swen250.num);
    myCourse.setCredits(swen250.credits);
    myCourse.setPrereqs(swen250.prereqs);
  });

  it('Should have had all its fields set', () => {
    expect(myCourse.name).toEqual('Personal Software Engineering');
    expect(myCourse.dept).toEqual('SWEN');
    expect(myCourse.num).toEqual('250');
    expect(myCourse.credits).toEqual(3);
    expect(myCourse.prereqs.length).toBe(0);
  });

  describe('should be able to set its placeholder status', () => {
    it('should be false by default', () => {
      expect(myCourse.isPlaceholder).toBe(false);
    });

    it('should be able to be set with setIsPlaceholder()', () => {
      myCourse.setIsPlaceholder(true);
      expect(myCourse.isPlaceholder).toBe(true);

      myCourse.setIsPlaceholder(false);
      expect(myCourse.isPlaceholder).toBe(false);
    });

    it('should be able to be set with toggleIsPlaceholder()', () => {
      myCourse.toggleIsPlaceholder();
      expect(myCourse.isPlaceholder).toBe(true);

      myCourse.toggleIsPlaceholder();
      expect(myCourse.isPlaceholder).toBe(false);
    });
  });

});
