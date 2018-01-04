import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

export default class DragDropMaster extends React.Component {
  onDragYearEnd(result) {
    if (!result.destination) {
      return; // The year was dropped in its current location
    }

    const targetYear = this.findYear(result.draggableId);
    const targetPlan = result.destination.droppableId === 'TRASH' ? null : this.props.plan;
    const sourcePlan = this.props.plan;

    sourcePlan.years.splice(targetYear.yearIndex, 1);
    if(targetPlan) {
      targetPlan.years.splice(result.destination.index, 0, targetYear.yearRef);
    }
  }

  onDragTermEnd(result) {
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

  onDragCourseEnd(result) {
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

  findCourse(courseId) {
    let location;
    this.props.plan.years.forEach((thisYear, yearIndex) => (
      thisYear.terms.forEach((thisTerm, termIndex) => (
        thisTerm.courses.forEach((thisCourse, courseIndex) => {
          if (thisCourse.id === courseId) {
            location = {
              courseRef: thisCourse,
              yearIndex: yearIndex,
              termIndex: termIndex,
              courseIndex: courseIndex,
            };
          }
        })
      ))
    ));
    return location;
  }

  findTerm(termId) {
    let term;
    this.props.plan.years.forEach((thisYear, yearIndex) => (
      thisYear.terms.forEach((thisTerm, termIndex) => {
        if (thisTerm.id === termId) {
          term = {
            termRef: thisTerm,
            yearIndex: yearIndex,
            termIndex: termIndex,
          };
        }
      })
    ));
    return term;
  }

  findYear(yearId) {
    let year;
    this.props.plan.years.forEach((thisYear, yearIndex) => {
      if (thisYear.id === yearId) {
        year = { yearRef: thisYear, yearIndex: yearIndex };
      }
    });
    return year;
  }

  render() {
    return (
      <DragDropContext
        onDragEnd={this.handleDragDrop.bind(this)}
      >
        <div>{this.props.children}</div>
      </DragDropContext>
      );
  }
}
