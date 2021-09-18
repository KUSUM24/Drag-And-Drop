import React, { useEffect, useRef, useState } from "react";
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
  submitInteger,
}) => {
  const integerValueRef = useRef();
  const operators = ["<", ">", "Int"];
  const spanValue = [">", "<", "Input"];
  const [crossDisplay, setCrossDisplay] = useState("none");
  // const [integerModal, setIntegerModal] = useState(false);
  let spanClass = "";
  let innerSpan = "";
  let intBox = false;
  if (typeof value == "number") {
    intBox = true;
  }
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
  if (typeof value == "number") {
    spanClass = "integer--button btn btn-success";
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
          <div className="form-group">
            <label for="integer-input">Enter Integer</label>
            <input
              type="number"
              className="form-control"
              id="integer-input"
              aria-describedby="number"
              placeholder="Enter Integer"
              ref={integerValueRef}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              submitInteger(integerValueRef.current.value);
              handleClose();
            }}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
