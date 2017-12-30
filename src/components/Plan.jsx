// @flow

import React from 'react';
import { Observer } from 'mobx-react';
import { Droppable } from 'react-beautiful-dnd';
import { Button } from 'reactstrap';
import { RIEInput } from 'riek';
import { Year } from './Year';
import { inlineValidate } from '../utils/inlineValidate';
import '../styles/objects.Plan.scss';
import '../styles/utilities.InlineEdit.scss';

export const Plan = ({ plan }) => {
  return (
    <Droppable droppableId={plan.title} type="PLAN-YEAR" direction="horizontal">
      {(provided) => (
        <Observer>
          {() => (
            <div>
              <RIEInput
                value={plan.title}
                change={plan.setTitle}
                propName="title"
                className="plan-title"
                classEditing="inline-editing"
                validate={inlineValidate}
              />
              <div
                className="PLAN-YEAR-DROPPABLE"
                ref={provided.innerRef}
              >
                <div className="plan">
                  {plan.years.map((year) =>
                    <Year
                      key={year.id}
                      year={year}
                      colorScheme={plan.colorScheme}
                    />
                  )}
                  {provided.placeholder}
                  <Button
                    color="link"
                    onClick={() => plan.addYear()}
                  >+</Button>
                </div>
              </div>
            </div>
          )}
        </Observer>
      )}
    </Droppable>
  );
};

Plan.displayName = 'Plan';
