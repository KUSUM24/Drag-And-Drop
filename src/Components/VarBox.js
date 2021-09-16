import React from "react";
import { Draggable } from "react-beautiful-dnd";

export const VarBox = ({ index, value }) => {
  return (
    <>
      <Draggable key={index} draggableId={index.toString()} index={index}>
        {(provided) => (
          <div
            key={index}
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
