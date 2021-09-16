import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Container } from "react-bootstrap";
import { VarBox } from "./VarBox";

export const List = (props) => {
  const getBoxes = (item, index) => {
    return (
      <VarBox
        // internalScroll
        // key={row.id}
        // listId={row.id}
        // listType="CARD"
        // row={row}
        key={index}
        value={item}
        index={index}
      />
    );
  };
  return (
    <DragDropContext>
      <Droppable droppableId="index">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="varBox--container"
          >
            {props.variables.map(getBoxes)}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
