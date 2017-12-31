import React from 'react';
import { inject, observer } from 'mobx-react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Plan } from './Plan';
import { CourseModal } from './editCourseModal/CourseModal';
import { Trash } from './Trash';
import '../styles/objects.Workspace.scss';
import '../styles/utilities.grab.scss';

export const Workspace = inject('store')(observer(({ store }) => (
  <div className="workspace">
    <DragDropContext
      onDragEnd={store.mainPlan.handleDragDrop.bind(store.mainPlan)}
    >
      <Plan plan={store.mainPlan} />
      <CourseModal />
      <Trash />
    </DragDropContext>
  </div>
)));

Workspace.displayName = 'Workspace';
