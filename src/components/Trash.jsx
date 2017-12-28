// @flow

import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { FaTrash, FaTrashO } from 'react-icons/lib/fa';
import '../styles/objects.Trash.scss';

export const Trash = () => (
  <div className="trash">
    <Droppable droppableId="TRASH" type="PLAN-YEAR">
      {(PYProvided, PYSnapshot) => (
        <Droppable droppableId="TRASH" type="YEAR-TERM">
          {(YTProvided, YTSnapshot) => (
            <Droppable droppableId="TRASH" type="TERM-COURSE">
              {(TCProvided, TCSnapshot) => (
                <div
                  className="TRASH-DROPPABLE"
                  ref={ref=>{
                    PYProvided.innerRef(ref);
                    YTProvided.innerRef(ref);
                    TCProvided.innerRef(ref);
                  }}
                >
                  <div className="Trash-img">
                    {TCSnapshot.isDraggingOver ||
                        YTSnapshot.isDraggingOver ||
                        PYSnapshot.isDraggingOver ?
                        <FaTrash size={42}/>
                        :
                        <FaTrashO size={42}/>
                    }
                  </div>
                </div>
              )}
            </Droppable>
          )}
        </Droppable>
      )}
    </Droppable>
  </div>
);

Trash.displayName = 'Trash';
