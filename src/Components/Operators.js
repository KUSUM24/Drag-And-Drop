import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

export const Operators = () => {
  return (
    <Droppable
      droppableId="operator"
      direction={"vertical"}
      isDropDisabled={true}
    >
      {(provided, snapshot) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="operator--container"
        >
          <Draggable
            key={"operator-gt"}
            draggableId={"operator-gt"}
            index={300}
          >
            {(provided) => (
              <div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                className="operation--button btn"
              >
                &gt;
              </div>
            )}
          </Draggable>
          <Draggable
            key={"operator-lt"}
            draggableId={"operator-lt"}
            index={301}
          >
            {(provided) => (
              <div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                className="operation--button btn"
              >
                &lt;
              </div>
            )}
          </Draggable>
          <hr className="w-75" />
          <Draggable
            key={"operator-int"}
            draggableId={"operator-int"}
            index={302}
          >
            {(provided) => (
              <div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                className="integer--button btn btn-success"
              >
                Integer
              </div>
            )}
          </Draggable>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
