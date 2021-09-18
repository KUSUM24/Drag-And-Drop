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
      currentQuery.splice(currentQuery.length, 0, item);
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
      currentQuery.splice(currentQuery.length, 0, item);
    }
    setQuery(currentQuery);
    setVariables(currentVariables);
    // if (destination.droppableId == "operator") {
    //   return;
    // }
    // console.log(source, destination);
    // if (source.droppableId != destination.droppableId) {
    //   if (source.droppableId == "source") {
    //     const currentVariables = variables;
    //     const currentQuery = query;
    //     const currentItem = currentVariables.splice(source.index, 1);
    //     currentQuery.splice(destination.index, 0, currentItem);
    //     setVariables(currentVariables);
    //     setQuery(currentQuery);
    //   } else if (
    //     source.droppableId == "operator" &&
    //     destination.droppableId == "source"
    //   ) {
    //     return;
    //   } else if (
    //     source.droppableId == "operator" &&
    //     destination.droppableId == "destination"
    //   ) {
    //     let currentOperation = "";
    //     if (source.index == 301) {
    //       setOperation("lt");
    //       currentOperation = "lt";
    //     } else if (source.index == 300) {
    //       setOperation("gt");
    //       currentOperation = "gt";
    //     } else {
    //       setOperation("int");
    //       currentOperation = "int";
    //     }
    //     let currentQuery = query;
    //     currentQuery.push(currentOperation);
    //     setQuery(currentQuery);
    //   } else {
    //   }
    //   {
    //     const currentQuery = query;
    //     const currentVariables = variables;
    //     const currentItem = currentQuery.splice(source.index, 1);
    //     currentVariables.splice(destination.index, 0, currentItem);
    //     setQuery(currentQuery);
    //     setVariables(currentVariables);
    //   }
    // } else {
    //   if (result.destination.droppableId == "destination") {
    //     const items = query;
    //     const reorderedItem = items.splice(result.source.index, 1);
    //     items.splice(result.destination.index, 0, reorderedItem);
    //     setQuery(items);
    //   } else {
    //     const items = variables;
    //     const reorderedItem = items.splice(result.source.index, 1);
    //     items.splice(result.destination.index, 0, reorderedItem);
    //     setVariables(items);
    //   }
    // }
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
              <DropPanel className="drop-section" query={query} />
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
