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
