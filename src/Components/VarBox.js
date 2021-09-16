import React from "react";
import { Draggable } from "react-beautiful-dnd";

export const VarBox = ({ dropBox, index, value }) => {
  return (
    <>
      {/* <div>{dropBox}</div> */}
      <Draggable
        key={dropBox + index.toString()}
        draggableId={dropBox + index.toString()}
        index={index}
        // id={index.toString()}
      >
        {(provided) => (
          <span
            // key={index.toString()}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className="varBox--button btn"
          >
            {value}
          </span>
        )}
      </Draggable>
    </>
  );
};
