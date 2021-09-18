import React, { useState, useEffect } from "react";
import { DropPanel } from "./Components/DropPanel";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { List } from "./Components/List";
import { Operators } from "./Components/Operators";
import { Results } from "./Components/Results";
import "./styles/custom.css";
import { FormatIndex } from "./Components/FormatIndex";
import { Button } from "react-bootstrap";
export const App = () => {
  const [variables, setVariables] = useState([]);
  const [dataSet, setDataSet] = useState([
    "A",
    "A",
    "A",
    "A",
    "A",
    "B",
    "B",
    "B",
    "B",
    "B",
    "B",
    "C",
    "C",
    "C",
    "C",
    "D",
    "D",
    "D",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "H",
    "H",
    "H",
    "J",
    "J",
    "J",
    "J",
    "J",
    "K",
    "K",
    "K",
    "K",
    "K",
    "K",
    "K",
  ]);
  const [dataSetValues, setDataSetValues] = useState([
    10, 20, 25, 100, 60, 0, 15, 30, 50, 150, 200, 75, 70, 80, 90, 0, 10, 200,
    110, 65, 45, 15, 5, 145, 190, 80, 70, 60, 10, 30, 50, 70, 90, 0, 20, 40, 60,
    80, 100, 120,
  ]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState([]);
  const [operation, setOperation] = useState();
  const [crossBtn, setCrossBtn] = useState(true);
  const [integerModal, setIntegerModal] = useState(false);
  const [integerValue, setIntegerValue] = useState();
  const [queryStatus, setQueryStatus] = useState(false);
  const [variable, setVariable] = useState();
  const [results, setResults] = useState([]);
  useEffect(() => {
    const newDatasSet = new Set(dataSet);

    setVariables([...newDatasSet]);
    setLoading(false);
  }, []);
  useEffect(() => {
    const currentQuery = query;
    let index = currentQuery.indexOf("Int");
    if (index == -1) {
      currentQuery.forEach((q, i) => {
        if (typeof q == "number") {
          index = i;
        }
      });
    }
    currentQuery[index] = parseInt(integerValue);
    setQuery([...currentQuery]);
  }, [integerValue]);
  const handleDragStart = (start) => {
    setCrossBtn(false);
  };
  const handleDrag = (result) => {
    setCrossBtn(true);
    const { source, destination } = result;
    if (!source || !destination) {
      return;
    }
    if (destination.droppableId == "operator") {
      return;
    }
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
      currentQuery.splice(destination.index, 0, item[0]);
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
      currentQuery.splice(destination.index, 0, item);
    }
    setQuery(currentQuery);
    setVariables(currentVariables);
  };
  const handleIntegerModal = (status) => {
    setIntegerModal(status);
  };
  const handleRemoveQuery = (index) => {
    const currentQuery = query;
    currentQuery.splice(index, 1);
    setQuery([...currentQuery]);
  };
  const handleSubmitInteger = (value) => {
    setIntegerValue(value);
  };
  const verifyQuery = () => {
    const currentQuery = query;
    let valid = true;
    if (currentQuery.length != 3) {
      valid = false;
    } else {
      let first =
        typeof currentQuery[0] != "number" && !currentQuery[0].match(/[<>]/);
      let second =
        typeof currentQuery[1] != "number" && currentQuery[1].match(/[<>]/);
      let third = typeof currentQuery[2] == "number";
      // let forth = typeof currentQuery[0] == "number";
      // let fifth =
      //   typeof currentQuery[1] != "number" && currentQuery[1].match(/[<>]/);
      // let sixth =
      //   typeof currentQuery[2] != "number" && !currentQuery[2].match(/[<>]/);
      if (first && second && third) {
        valid = true;
      } else {
        valid = false;
      }
    }
    setQueryStatus(valid);
    if (valid) {
      const [variable, operator, number] = query;
      setVariable(variable);
      let requiredDataIndexes = [];
      let requiredDataSetValues = [];
      dataSet.forEach((value, index) => {
        if (value == variable) {
          requiredDataIndexes.push(index);
        }
      });
      requiredDataIndexes.forEach((index) => {
        if (operator == ">") {
          if (dataSetValues[index] < number) {
            requiredDataSetValues.push(dataSetValues[index]);
          }
        } else {
          if (dataSetValues[index] > number) {
            requiredDataSetValues.push(dataSetValues[index]);
          }
        }
      });
      console.log(requiredDataSetValues);
      setResults([...requiredDataSetValues]);
    } else {
      window.alert("Please enter a valid query in the given format");
    }
    // console.log("valid -> ", valid);
  };
  return (
    <>
      {!loading && (
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
                  removeQuery={handleRemoveQuery}
                  crossBtn={crossBtn}
                  integerModal={integerModal}
                  submitInteger={handleSubmitInteger}
                />

                <div className="d-flex justify-content-center">
                  <div
                    className="btn btn-primary w-50 mt-3"
                    onClick={verifyQuery}
                  >
                    SUBMIT
                  </div>
                </div>
                <div>{queryStatus ? <></> : <></>}</div>
              </div>
            </div>
            <hr className="result-hr my-2" />
            <div className="drop-panel d-flex justify-content-center">
              <Results results={results} variable={variable} />
            </div>
          </>
          {/* )} */}
          {/* </Droppable> */}
        </DragDropContext>
      )}
    </>
  );
};

export default App;
