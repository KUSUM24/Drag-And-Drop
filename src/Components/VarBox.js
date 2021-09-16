import React from "react";
import { Draggable } from "react-beautiful-dnd";

export const VarBox = ({ index, value }) => {
  return (
    <>
      <Draggable
        key={index.toString()}
        draggableId={index.toString()}
        index={index}
        id={index.toString()}
      >
        {(provided) => (
          <div
            key={index}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className="varBox--button btn"
          >
            {value}
          </div>
        )}
      </Draggable>
    </>
  );
};
