// @flow

import { observable } from 'mobx';
import { YearModel } from './YearModel';
import { ColorModel } from './ColorModel';
import { CourseLocation } from './CourseLocation';

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

  addYear(
    title = '2000',
    terms = [],
  ) {
    this.years.push(new YearModel(title, terms));
  }

  addColor(
    dept = 'DEPT',
    color = 'rgb(12, 148, 0)',
  ) {
    this.colorScheme.push(new ColorModel(dept, color));
  }

  findCourse(courseId) {
    let location;
    this.years.forEach((year, yearIndex) => (
      year.terms.forEach((term, termIndex) => (
        term.courses.forEach((thisCourse, courseIndex) => {
          if (thisCourse.id === courseId) {
            location = new CourseLocation(thisCourse, yearIndex, termIndex, courseIndex);
          }
        })
      ))
    ));
    return location;
  }

  onDragCourseEnd(result) {
    if (!result.destination) {
      return; //the course was dropped in its current location
    }

    const source = this.findCourse(result.draggableId);

    const sourceTerm = this.years[source.yearIndex]
      .terms[source.termIndex]
      .courses;

    // Based on https://stackoverflow.com/questions/2440700/reordering-arrays
    sourceTerm.splice(result.destination.index, 0, sourceTerm.splice(result.source.index, 1)[0]);
  }
}

