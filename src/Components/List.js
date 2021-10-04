import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Container } from "react-bootstrap";
import { VarBox } from "./VarBox";

export const List = (props) => {
  const getBoxes = (item, index) => {
    return (
      <VarBox
        dragDisable={false}
        dropBox={"source"}
        key={index}
        value={item}
        index={index}
      />
    );
  };
  return (
    <Droppable droppableId="source" direction="horizontal">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="varBox--container"
        >
          {props.variables.map(getBoxes)}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
