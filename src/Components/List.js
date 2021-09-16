import React from "react";
import { Container } from "react-bootstrap";
import { VarBox } from "./VarBox";

export const List = ({ variables }) => {
  const getBoxes = (item, index) => {
    return (
      <VarBox
        // internalScroll
        // key={row.id}
        // listId={row.id}
        // listType="CARD"
        // row={row}
        value={item}
        index={index}
      />
    );
  };
  return <div className="varBox--container">{variables.map(getBoxes)}</div>;
};
