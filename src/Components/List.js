import React from "react";
import { Container } from "react-bootstrap";
import { VarBox } from "./VarBox";

export const List = ({ variables }) => {
  const getBoxes = (item) => {
    return <VarBox value={item} />;
  };
  return <div className="varBox--container">{variables.map(getBoxes)}</div>;
};
