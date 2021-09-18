import React, { useState, useEffect } from "react";
import { DropPanel } from "./Components/DropPanel";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { List } from "./Components/List";
import { Operators } from "./Components/Operators";
import { Results } from "./Components/Results";
import "./styles/custom.css";
import { FormatIndex } from "./Components/FormatIndex";
export const App = () => {
  const [variables, setVariables] = useState([
    "Kusum",
    "B",
    "C",
    "D",
    "Jai",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
    "A",
    "B",
    "C",
    "D",
    "K",
  ]);
  const [query, setQuery] = useState([]);
  const [operation, setOperation] = useState();
  const [integerModal, setIntegerModal] = useState(false);
  const handleDragStart = (start) => {
    console.log(start);
  };
  const handleDrag = (result) => {
    const { source, destination } = result;
    if (!source || !destination) {
      return;
    }
    if (destination.droppableId == "operator") {
      return;
    }
    console.log(source.droppableId, destination.droppableId);
    let currentVariables = variables;
    let currentQuery = query;
    if (currentQuery.length >= 3) {
      return;
    }

    if (source.droppableId == "source" && destination.droppableId == "source") {
      const item = currentVariables.splice(source.index, 1);
      currentVariables.splice(destination.index, 0, item);
    }
    if (
      source.droppableId == "source" &&
      destination.droppableId == "destination"
    ) {
      const item = currentVariables.splice(source.index, 1);
      currentQuery.splice(destination.index, 0, item);
    }
    if (
      source.droppableId == "destination" &&
      destination.droppableId == "source"
    ) {
      const item = currentQuery.splice(source.index, 1);
      currentVariables.splice(destination.index, 0, item);
    }
    if (
      source.droppableId == "operator" &&
      destination.droppableId == "source"
    ) {
      return;
    }
    if (
      source.droppableId == "operator" &&
      destination.droppableId == "destination"
    ) {
      let item = source.index;
      if (item == 300) {
        item = "<";
      } else if (item == 301) {
        item = ">";
      } else {
        item = "Int";
      }
      console.log(source);
      currentQuery.splice(destination.index, 0, item);
    }
    setQuery(currentQuery);
    setVariables(currentVariables);
  };
  const handleIntegerModal = (status) => {
    setIntegerModal(status);
    console.log(status, "bhhgv");
  };
  const handleIntegerValue = (integerValue) => {
    console.log(integerValue);
  };
  return (
    <>
      <DragDropContext onDragEnd={handleDrag} onDragStart={handleDragStart}>
        {/* <Droppable droppableId="index"> */}
        {/* {(provided) => ( */}
        <>
          <List
            // innerRef={provided.innerRef}
            // {...provided.droppableProps}
            variables={variables}
            handleDrag={handleDrag}
          />
          <div className="drag-panel d-flex">
            <Operators className="operators" />
            <div className="w-100">
              <FormatIndex />
              <DropPanel
                className="drop-section"
                query={query}
                getIntegerModal={handleIntegerModal}
                integerModal={integerModal}
                getIntegerValue={handleIntegerValue}
              />
            </div>
          </div>
          <div className="drop-panel d-flex justify-content-center">
            <Results />
          </div>
        </>
        {/* )} */}
        {/* </Droppable> */}
      </DragDropContext>
    </>
  );
};

export default App;
