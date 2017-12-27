// @flow

import React from 'react';
import { Observer } from 'mobx-react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Year } from './Year';
import '../styles/objects.Plan.scss';

export const Plan = ({ plan }) => {
  return (
    <DragDropContext
      onDragEnd={plan.handleDragDrop.bind(plan)}
    >
      <Droppable droppableId={plan.title} type="PLAN-YEAR" direction="horizontal">
        {(provided) => (
          <Observer>
            {() => (
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
                </div>
              </div>
            )}
          </Observer>
        )}
      </Droppable>
    </DragDropContext>
  );
};

Plan.displayName = 'Plan';
