import React from 'react';
import { inject, observer } from 'mobx-react';
import {
  Button,
  ButtonDropdown,
  Card,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { Dropdown } from 'semantic-ui-react';
import { CoursePreview } from './CoursePreview';
import { AddUnlistedModal } from './AddUnlistedModal';
import { FaPlusCircle } from 'react-icons/lib/fa';
import '../../styles/objects.CoursePrerequisites.scss';
import '../../styles/utilities.shadow.scss';
import '../../styles/utilities.fadeIn.scss';

export const Prerequisites = inject('store')(observer(({ store, course }) =>(
  <Card className="prereq-box">
    {course.prereqs.map(req => (
      <CoursePreview
        key={req.id}
        type="prereq"
        parent={course}
        course={req}
        color={store.mainPlan.colorScheme.get(req.dept)}
      />
    ))}
    <ButtonDropdown
      className="add-course-btn shadow"
      isOpen={store.courseModalState.prereqPickerIsOpen}
      toggle={store.courseModalState.togglePrereqPicker}
    >
      <DropdownToggle>
        <FaPlusCircle size={24} />
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={store.courseModalState.toggleAddUnlisted}>
          Add Unlisted Course...
        </DropdownItem>
        <DropdownItem divider />
        <div className="search-box">
          <Dropdown
            placeholder="Search For Exisiting Courses"
            fluid
            multiple
            search
            selection
            value={store.courseModalState.addPrereqStage.peek()}
            onChange={store.courseModalState.handleAddStagedPrereq.bind(store.courseModalState)}
            options={store.mainPlan.getAllCourses()}
          />
          <Button
            color="primary"
            size="sm"
            type="button"
            onClick={store.courseModalState.commitStagedPrereqs.bind(store.courseModalState)}
          >
            Add
          </Button>
        </div>
      </DropdownMenu>
    </ButtonDropdown>
    <AddUnlistedModal />
  </Card>
)));
