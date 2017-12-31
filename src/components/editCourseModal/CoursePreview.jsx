import React from 'react';
import { inject, observer } from 'mobx-react';
import { FaTimesCircle } from 'react-icons/lib/fa';
import '../../styles/objects.Course.scss';
import '../../styles/objects.CoursePreview.scss';
import '../../styles/utilities.shadow.scss';
import '../../styles/utilities.center.scss';

export const CoursePreview = inject('store')(observer(({store, parent, course, color, type}) => {
  store.mainPlan.getAllCourses().forEach( thisCourse => {
    if ((thisCourse.dept === course.dept) && (thisCourse.num === course.num)) {
      course.credits = thisCourse.credits;
      course.name = thisCourse.name;
    }
  });
  return (
    <li
      className={'course shadow center ' + type}
      style={{ backgroundColor: color }}
    >
      <i className="fa fa-exclamation prereq-warning-badge"></i>
      {type === 'prereq' ? <div
        className="deleteButton fade"
        onClick={parent.removePrereq.bind(parent, course)}
      >
        <FaTimesCircle size={24} />
      </div>: null
      }
      <div className="wrapper">
        <div className="header-background"></div>
        <h5 className="header-text">{course.dept} {course.num}</h5>
        <div className="details">
          <p className="name">{course.name || ''}</p>
          <p className="credits">[{course.credits || '?'}]</p>
        </div>
      </div>
    </li>
  );
}));
