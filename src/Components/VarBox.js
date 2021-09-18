import React, { useEffect, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import CancelIcon from "@material-ui/icons/Cancel";
import { Button, Modal } from "react-bootstrap";

export const VarBox = ({
  dropBox,
  index,
  value,
  dragDisable,
  getIntegerModal,
  removeQuery,
  crossBtn,
  integerModal,
  getIntegerValue,
}) => {
  const operators = ["<", ">", "Int"];
  const spanValue = [">", "<", "Input"];
  const [crossDisplay, setCrossDisplay] = useState("none");
  // const [integerModal, setIntegerModal] = useState(false);
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

  useEffect(() => {
    if (dragDisable) {
      setCrossDisplay("inline-block");
    }
  }, []);

  const handleClose = () => {
    getIntegerModal(false);
  };
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
            {crossBtn && (
              <CancelIcon
                onClick={() => {
                  removeQuery(index);
                }}
                className="cross-btn"
                style={{ display: `${crossDisplay}` }}
              />
            )}
            <span
              // key={index.toString()}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              className={spanClass}
              onClick={
                spanClass == "integer--button btn btn-success"
                  ? () => {
                      getIntegerModal(true);
                    }
                  : () => {}
              }
            >
              {innerSpan || value}
            </span>
          </div>
        )}
      </Draggable>
      <Modal show={integerModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Integer Input</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="form-group">
            <label for="integer-input">Enter Integer</label>
            <input
              type="number"
              class="form-control"
              id="integer-input"
              aria-describedby="number"
              placeholder="Enter Integer"
              onChange={(event) => getIntegerValue(event.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
