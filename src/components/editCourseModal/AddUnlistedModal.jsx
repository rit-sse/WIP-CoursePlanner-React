import React from 'react';
import { inject, observer } from 'mobx-react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { PrereqCourse } from '../../stores/models/PrereqCourse';

export const AddUnlistedModal = inject('store')(observer(({ store }) => {
  let dept;
  let num;
  return(
    <Modal
      isOpen={store.courseModalState.addUnlistedModalIsOpen}
      toggle={store.courseModalState.toggleAddUnlisted}
      className="add-unlisted-modal"
    >
      <Form
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            store.courseModalState.addUnlistedPrereq( new PrereqCourse(dept, num));
            store.courseModalState.toggleAddUnlisted();
          }
        }}
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          store.courseModalState.addUnlistedPrereq( new PrereqCourse(dept, num));
          store.courseModalState.toggleAddUnlisted();
        }}
      >
        <ModalHeader
          toggle={store.courseModalState.toggleAddUnlisted}
        >
          Add Unlisted Prerequisite Course
        </ModalHeader>
        <ModalBody>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="Udept" className="mr-sm-2">Department</Label>
            <Input
              autoFocus
              id="Udept"
              placeholder="DEPT"
              onChange={(change) => { dept = change.target.value.toUpperCase(); }}
            />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2">Course Num</Label>
            <Input
              id="examplePassword"
              placeholder="000"
              onChange={(change) => { num = change.target.value; }}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            onClick={store.courseModalState.toggleAddUnlisted}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            type="submit"
          >
            Add
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
}));
