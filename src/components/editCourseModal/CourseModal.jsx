import React from 'react';
import { inject, observer } from 'mobx-react';
import {
  Button,
  CardBody,
  Col,
  Collapse,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  UncontrolledTooltip } from 'reactstrap';
import { Checkbox } from 'semantic-ui-react';
import { ChromePicker } from 'react-color';
import { FaCaretUp, FaCaretDown, FaQuestionCircleO } from 'react-icons/lib/fa';
import { CoursePreview } from './CoursePreview';
import { Prerequisites } from './CoursePrerequisites';
import '../../styles/objects.CourseModal.scss';

export const CourseModal = inject('store')(observer(({ store: {courseModalState}}) => (
  <Modal
    isOpen={courseModalState.isOpen}
    toggle={courseModalState.toggleIsOpen.bind(courseModalState)}
    className="course-modal"
  >
    <Form
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (!courseModalState.prereqPickerIsOpen) {
            courseModalState.saveChanges.bind(courseModalState)();
          }
        }
      }}
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        courseModalState.saveChanges.bind(courseModalState)();
      }}
    >
      <ModalHeader toggle={courseModalState.toggleIsOpen.bind(courseModalState)}>Edit Course</ModalHeader>
      <ModalBody>
        <div className="preview-modal-body">
          <div className="preview-modal-left">
            <div className="course-preview-wrap">
              <CoursePreview
                type={"course-preview"}
                course={courseModalState.courseCopy}
                color={courseModalState.previewColor}
              />
            </div>
          </div>
          <div className="preview-modal-right">
            <FormGroup row>
              <Label for="deptInput" sm={4}>Department</Label>
              <Col sm={8}>
                <Input
                  autoFocus
                  name="dept"
                  id="deptInput"
                  onChange={courseModalState.handleDeptChange.bind(courseModalState)}
                  placeholder={courseModalState.courseCopy.dept}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="numInput" sm={4}>Course #</Label>
              <Col sm={8}>
                <Input
                  name="num"
                  id="numInput"
                  onChange={courseModalState.handleNumChange.bind(courseModalState)}
                  placeholder={courseModalState.courseCopy.num}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="titleInput" sm={4}>Course Title</Label>
              <Col sm={8}>
                <Input
                  name="title"
                  id="titleInput"
                  onChange={courseModalState.handleTitleChange.bind(courseModalState)}
                  placeholder={courseModalState.courseCopy.name}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="creditsInput" sm={4}># of Credits</Label>
              <Col sm={8}>
                <Input
                  type="number"
                  name="credits"
                  id="creditsInput"
                  innerRef={courseModalState.setCreditsInputRef.bind(courseModalState)}
                  onChange={courseModalState.handleCreditsChange.bind(courseModalState)}
                />
              </Col>
            </FormGroup>
          </div>
        </div>

        <div className="advanced-section">
          <div className="lead" onClick={courseModalState.togglePrereqs}>
            Prerequisites
            <div className="expand-caret-state">
              {courseModalState.prereqsIsOpen ? <FaCaretDown /> : <FaCaretUp />}
            </div>
          </div>
          <Collapse isOpen={courseModalState.prereqsIsOpen}>
            <CardBody>
              <Prerequisites
                course={courseModalState.courseCopy}
              />
            </CardBody>
          </Collapse>
        </div>

        <div className="advanced-section">
          <div className="lead" onClick={courseModalState.toggleAdvanced}>
            Advanced
            <div className="expand-caret-state">
              {courseModalState.advancedIsOpen ? <FaCaretDown /> : <FaCaretUp />}
            </div>
          </div>
          <Collapse isOpen={courseModalState.advancedIsOpen}>
            <CardBody>

              <FormGroup row>
                <Label for="creditsInput" sm={6}>
                  Placeholder Course
                  <FaQuestionCircleO id="placeholderTooltip" />
                  <UncontrolledTooltip target="placeholderTooltip">
                    Placeholder courses are courses for which an exact course code may not be known.
                    If turned on, this course will not show up in searches for prerequisite courses.
                  </UncontrolledTooltip>
                </Label>
                <Col sm={4}>
                  <Checkbox
                    toggle
                    checked={courseModalState.courseCopy.isPlaceholder}
                    onChange={courseModalState.courseCopy.toggleIsPlaceholder.bind(courseModalState)}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="creditsInput" sm={6}>Color</Label>
                <Col sm={4}>
                  <ChromePicker
                    id="colorPicker"
                    color={courseModalState.previewColor}
                    onChange={courseModalState.handleSelectColor.bind(courseModalState)}
                  />
                </Col>
              </FormGroup>

            </CardBody>
          </Collapse>
        </div>

      </ModalBody>
      <ModalFooter>
        <Button
          color="secondary"
          onClick={courseModalState.toggleIsOpen.bind(courseModalState)}
          type="button"
        >
          Cancel
        </Button>
        <Button
          color="primary"
          type="submit"
        >
          Save
        </Button>
      </ModalFooter>
    </Form>
  </Modal>
)));
