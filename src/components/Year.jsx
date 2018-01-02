import React from 'react';
import { Observer } from 'mobx-react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown } from 'reactstrap';
import { Term } from './Term';
import { RIEInput } from 'riek';
import { FaEllipsisH, FaPlus } from 'react-icons/lib/fa';
import { IoClose } from 'react-icons/lib/io';
import { inlineValidate } from '../utils/inlineValidate';
import '../styles/objects.Year.scss';
import '../styles/utilities.InlineEdit.scss';


export const Year = ({ year }) => {
  return (
    <Draggable
      draggableId={year.id}
      type="PLAN-YEAR"
    >
      {(draggableProvided, draggableSnapshot) => (
        <div>
          <div
            {...draggableProvided.dragHandleProps}
            className="year-box"
            ref={draggableProvided.innerRef}
            style={{
              ...draggableProvided.draggableStyle,
              cursor: draggableSnapshot.isDragging ? 'grabbing' : 'default',
              opacity: draggableSnapshot.isDragging ? '.5' : '1',
            }}
          >
            <Droppable droppableId={year.id} type="YEAR-TERM" direction="horizontal">
              {(droppableProvided, snapshot) => (
                <Observer>
                  {() => (
                    <Card className="year">
                      <CardHeader className="title">
                        <div className="year-title">
                          <RIEInput
                            value={year.title}
                            change={({ title }) => { year.setTitle(title); }}
                            propName="title"
                            classEditing="year-title inline-editing"
                            validate={inlineValidate}
                          />
                        </div>
                        <UncontrolledDropdown className="year-options">
                          <DropdownToggle>
                            <FaEllipsisH />
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem
                              onClick={() => year.addTerm()}
                            >
                              <FaPlus />
                              Add A New Term
                            </DropdownItem>
                            <DropdownItem>
                              <IoClose />
                              Delete Year
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </CardHeader>
                      <div
                        className="YEAR-TERM-DROPPABLE"
                        ref={droppableProvided.innerRef}
                        style={{
                          backgroundColor: snapshot.isDraggingOver ? 'lightyellow' : 'white',
                        }}
                      >
                        <CardBody className="term-wrapper">
                          {year.terms.map((term) =>
                            <Term
                              key={term.id}
                              courses={term.courses}
                              term={term}
                            />
                          )}
                          {droppableProvided.placeholder}
                        </CardBody>
                      </div>
                    </Card>
                  )}
                </Observer>
              )}
            </Droppable>
          </div>
          {draggableProvided.placeholder}
        </div>
      )}
    </Draggable>
  );
};

Year.displayName = 'Year';
