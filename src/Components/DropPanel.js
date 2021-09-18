import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { VarBox } from "./VarBox";

export const DropPanel = (props) => {
  const getBoxes = (item, index) => {
    return (
      <VarBox
        dropBox={"destination"}
        dragDisable={true}
        key={index}
        value={item}
        index={index}
        getIntegerModal={props.getIntegerModal}
      />
    );
  };
  return (
    <>
      <Droppable droppableId="destination" direction="horizontal">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="drop-panel--container"
          >
            {props.query.map(getBoxes)}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </>
  );
};
