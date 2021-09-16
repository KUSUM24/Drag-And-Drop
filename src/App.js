import React, { useState, useEffect } from "react";
import { DropPanel } from "./Components/DropPanel";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { List } from "./Components/List";
import { Operators } from "./Components/Operators";
import { Results } from "./Components/Results";
import "./styles/custom.css";
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
  const handleDrag = (result) => {
    if (!result.destination) {
      return;
    }
    const { source, destination } = result;
    console.log(source, destination);
    if (source.droppableId != destination.droppableId) {
      if (source.droppableId == "source") {
        const currentVariables = variables;
        const currentQuery = query;
        const currentItem = currentVariables.splice(source.index, 1);
        currentQuery.splice(destination.index, 0, currentItem);
        setVariables(currentVariables);
        setQuery(currentQuery);
      } else {
        const currentQuery = query;
        const currentVariables = variables;
        const currentItem = currentQuery.splice(source.index, 1);
        currentVariables.splice(destination.index, 0, currentItem);
        setQuery(currentQuery);
        setVariables(currentVariables);
      }
    } else {
      if (result.destination.droppableId == "destination") {
        const items = query;
        const reorderedItem = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setQuery(items);
      } else {
        const items = variables;
        const reorderedItem = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setVariables(items);
      }
    }
  };
  return (
    <>
      <DragDropContext onDragEnd={handleDrag}>
        {/* <Droppable droppableId="index"> */}
        {/* {(provided) => ( */}
        <>
          <List
            // innerRef={provided.innerRef}
            // {...provided.droppableProps}
            variables={variables}
            handleDrag={handleDrag}
          />
          <div className="drag-panel">
            <Operators className="operators" />
            <DropPanel className="drop-section" query={query} />
          </div>
          <div className="drop-panel">
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
