// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { CourseModel } from '../stores/models/CourseModel';
import { ColorModel } from '../stores/models/ColorModel';
import '../styles/objects.Course.scss';

type Props = {
  colorScheme: Array<ColorModel>,
  course: CourseModel,
};

export const Course = observer( (props: Props) => (
  <li
    className="course"
    style={{
      'backgroundColor': props.colorScheme.find(
        thisColor => thisColor.dept === props.course.dept
      ).color,
    }}
  >
    <i className="fa fa-exclamation prereq-warning-badge"></i>
    <div className="wrapper">
      <h5 className="header-text">{props.course.dept} {props.course.num}</h5>
      <div className="header-background"></div>
      <div className="details">
        <p className="name">{props.course.name}</p>
        <p className="credits">[{props.course.credits}]</p>
      </div>
    </div>
  </li>
))
