// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { Draggable } from 'react-beautiful-dnd';
import { CourseModel } from '../stores/models/CourseModel';
import { ColorModel } from '../stores/models/ColorModel';
import '../styles/objects.Course.scss';
import '../styles/utilities.shadow.scss';
import '../styles/utilities.center.scss';

type Props = {
  colorScheme: Array<ColorModel>,
  course: CourseModel,
};

export const Course = observer( (props: Props) => (
  <Draggable
    draggableId={props.course.id}
    type="TERM"
  >
    {(provided, snapshot) => (
      <div>
        <li
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="course shadow center"
          style={{
            backgroundColor: props.colorScheme.find(
              thisColor => thisColor.dept === props.course.dept
            ).color,
            opacity: snapshot.isDragging ? '.5' : '1',
            ...provided.draggableStyle,
          }}
        >
          <i className="fa fa-exclamation prereq-warning-badge"></i>
          <div className="wrapper">
            <div className="header-background"></div>
            <h5 className="header-text">{props.course.dept} {props.course.num}</h5>
            <div className="details">
              <p className="name">{props.course.name}</p>
              <p className="credits">[{props.course.credits}]</p>
            </div>
          </div>
        </li>
        {provided.placeholder}
      </div>
    )}
  </Draggable>
));
