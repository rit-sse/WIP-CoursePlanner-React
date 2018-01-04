import React from 'react';
import { inject, observer } from 'mobx-react';
import DragDropMaster from './DragDropMaster';
import { Plan } from './Plan';
import { CourseModal } from './editCourseModal/CourseModal';
import { Trash } from './Trash';
import '../styles/objects.Workspace.scss';
import '../styles/utilities.grab.scss';

export const Workspace = inject('store')(observer(({ store }) => {
  return (
    <div className="workspace">
      <DragDropMaster plan={store.mainPlan}>
        <Plan plan={store.mainPlan} />
        <CourseModal />
        <Trash />
      </DragDropMaster>
    </div>
  );
}));

Workspace.displayName = 'Workspace';
