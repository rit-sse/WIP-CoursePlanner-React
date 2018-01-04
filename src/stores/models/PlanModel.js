import { action, observable } from 'mobx';
import { YearModel } from './YearModel';
import { CourseLocation } from './CourseLocation';
import { TermLocation } from './TermLocation';
import { YearLocation } from './YearLocation';
import { serializable, identifier, list, map, object } from 'serializr';
import { ID } from '../../utils/id';

export class PlanModel {
  @observable
  @serializable
  _id = '';

  @observable
  @serializable
  title = '';

  @observable
  @serializable
  isPublic = false;

  @observable
  @serializable(map())
  colorScheme = observable.map({'DEPT': 'green'});

  @observable
  @serializable(list(object(YearModel)))
  years = [];

  @observable
  @serializable(identifier())
  id;

  constructor(
    title = 'My New Course Plan',
    isPublic = false,
    colorScheme = observable.map({'DEPT': 'green'}),
    years = [],
  ) {
    this.title = title;
    this.isPublic = isPublic;
    this.years = years;
    this.colorScheme = colorScheme;
    this.id = ID();
  }

  @action.bound setTitle(title) {
    this.title = title;
  }

  @action.bound addYear(
    title = '2000',
    terms = [],
  ) {
    this.years.push(new YearModel(title, terms));
  }

  @action.bound addColor(dept, color) {
    this.colorScheme.set(dept, color);
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

  findYear(yearId) {
    let year;
    this.years.forEach((thisYear, yearIndex) => {
      if (thisYear.id === yearId) {
        year = new YearLocation(thisYear, yearIndex);
      }
    });
    return year;
  }

  handleDragDrop(result) {
    switch(result.type) {
      case 'PLAN-YEAR':
        this.onDragYearEnd(result);
        break;
      case 'YEAR-TERM':
        this.onDragTermEnd(result);
        break;
      case 'TERM-COURSE':
        this.onDragCourseEnd(result);
        break;
      default:
        // I dunno, cry about it?
        return;
    }
  }

  @action.bound onDragYearEnd(result) {
    if (!result.destination) {
      return; // The year was dropped in its current location
    }

    const targetYear = this.findYear(result.draggableId);
    const targetPlan = result.destination.droppableId === 'TRASH' ? null : this;
    const sourcePlan = this;

    sourcePlan.years.splice(targetYear.yearIndex, 1);
    if(targetPlan) {
      targetPlan.years.splice(result.destination.index, 0, targetYear.yearRef);
    }
  }

  @action.bound onDragTermEnd(result) {
    if (!result.destination) {
      return; // The term was dropped in its current location
    }

    const targetTerm = this.findTerm(result.draggableId);
    const targetYear = this.findYear(result.destination.droppableId);
    const sourceYear = this.findYear(result.source.droppableId);

    sourceYear.yearRef.terms.splice(targetTerm.termIndex, 1);
    if(targetYear) {
      targetYear.yearRef.terms.splice(result.destination.index, 0, targetTerm.termRef);
    }
  }

  @action.bound onDragCourseEnd(result) {
    if (!result.destination) {
      return; // The course was dropped in its current location
    }

    const targetCourse = this.findCourse(result.draggableId);
    const sourceTerm = this.findTerm(result.source.droppableId);

    if (result.destination.droppableId === 'TRASH') {
      sourceTerm.termRef.removeCourse(targetCourse.courseRef);
      return;
    }

    const targetTerm = this.findTerm(result.destination.droppableId);

    sourceTerm.termRef.courses.splice(targetCourse.courseIndex, 1);
    if(targetTerm) {
      targetTerm.termRef.courses.splice(result.destination.index, 0, targetCourse.courseRef);
    }
  }

  getAllCourses() {
    //gets an array of courses in the format that
    //https://react.semantic-ui.com/modules/dropdown expects
    const allCourses = [];
    this.years.forEach(year => {
      year.terms.forEach(term => {
        term.courses.forEach(course => {
          const courseCode = course.getCourseCode();
          if (!course.isPlaceholder) {
            allCourses.push({ key: course.id, value: course, text: courseCode });
          }
        });
      });
    });
    return allCourses;
  }

}
