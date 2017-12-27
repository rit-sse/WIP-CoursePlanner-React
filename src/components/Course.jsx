// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { Draggable } from 'react-beautiful-dnd';
import '../styles/objects.Course.scss';
import '../styles/utilities.shadow.scss';
import '../styles/utilities.center.scss';

export const Course = observer( ({colorScheme, course}) => (
  <Draggable
    draggableId={course.id}
    type="TERM-COURSE"
  >
    {(provided, snapshot) => (
      <div>
        <li
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="course shadow center"
          style={{
            backgroundColor: colorScheme.find(
              thisColor => thisColor.dept === course.dept
            ).color,
            opacity: snapshot.isDragging ? '.5' : '1',
            ...provided.draggableStyle,
          }}
        >
          <i className="fa fa-exclamation prereq-warning-badge"></i>
          <div className="wrapper">
            <div className="header-background"></div>
            <h5 className="header-text">{course.dept} {course.num}</h5>
            <div className="details">
              <p className="name">{course.name}</p>
              <p className="credits">[{course.credits}]</p>
            </div>
          </div>
        </li>
        {provided.placeholder}
      </div>
    )}
  </Draggable>
));

Course.displayName = 'Course';
