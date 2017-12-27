// @flow

import { action, observable } from 'mobx';
import { YearModel } from './YearModel';
import { ColorModel } from './ColorModel';
import { CourseLocation } from './CourseLocation';
import { TermLocation } from './TermLocation';

export class PlanModel {
  @observable title = '';
  @observable isPublic = false;
  @observable colorScheme = [];
  @observable years = [];

  constructor(
    title = 'My New Course Plan',
    isPublic = false,
    colorScheme = [],
    years = [],
  ) {
    this.title = title;
    this.isPublic = isPublic;
    this.years = years;
    this.colorScheme = colorScheme;
    this.colorScheme.push(new ColorModel());
  }

  @action.bound addYear(
    title = '2000',
    terms = [],
  ) {
    this.years.push(new YearModel(title, terms));
  }

  @action.bound addColor(
    dept = 'DEPT',
    color = 'rgb(12, 148, 0)',
  ) {
    this.colorScheme.push(new ColorModel(dept, color));
  }

  findCourse(courseId) {
    let location;
    this.years.forEach((thisYear, yearIndex) => (
      thisYear.terms.forEach((thisTerm, termIndex) => (
        thisTerm.courses.forEach((thisCourse, courseIndex) => {
          if (thisCourse.id === courseId) {
            location = new CourseLocation(thisCourse, yearIndex, termIndex, courseIndex);
          }
        })
      ))
    ));
    return location;
  }

  findTerm(termId) {
    let term;
    this.years.forEach((thisYear, yearIndex) => (
      thisYear.terms.forEach((thisTerm, termIndex) => {
        if (thisTerm.id === termId) {
          term = new TermLocation(thisTerm, yearIndex, termIndex);
        }
      })
    ));
    return term;
  }

  @action.bound onDragCourseEnd(result) {
    if (!result.destination) {
      return; // The course was dropped in its current location
    }

    const targetCourse = this.findCourse(result.draggableId);
    const targetTerm = this.findTerm(result.destination.droppableId);
    const sourceTerm = this.findTerm(result.source.droppableId);

    sourceTerm.termRef.courses.splice(targetCourse.courseIndex, 1);
    targetTerm.termRef.courses.splice(result.destination.index, 0, targetCourse.courseRef);
  }
}
