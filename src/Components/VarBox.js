import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import CancelIcon from "@material-ui/icons/Cancel";

export const VarBox = ({ dropBox, index, value, dragDisable }) => {
  const operators = ["<", ">", "Int"];
  const spanValue = [">", "<", "Input"];
  const [crossDisplay, setCrossDisplay] = useState(false);
  let spanClass = "";
  let innerSpan = "";
  if (operators.includes(value)) {
    innerSpan = operators.indexOf(value);
    innerSpan = spanValue[innerSpan];
    if (value == "Int") {
      spanClass = "integer--button btn btn-success";
    } else {
      spanClass = "operation--button btn";
    }
  } else {
    console.log(value);
    console.log(operators.includes(value));
    spanClass = "varBox--button btn";
  }
  // if (dragDisable) {
  //   setCrossDisplay(true);
  // }
  return (
    <>
      {/* <div>{dropBox}</div> */}
      <Draggable
        isDragDisabled={dragDisable}
        key={dropBox + index.toString()}
        draggableId={dropBox + index.toString()}
        index={index}
        // id={index.toString()}
      >
        {(provided) => (
          <div>
            <CancelIcon
              className="cross-btn"
              style={{ display: `${crossDisplay}` }}
            />
            <span
              // key={index.toString()}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              className={spanClass}
            >
              {innerSpan || value}
            </span>
          </div>
        )}
      </Draggable>
    </>
  );
};
