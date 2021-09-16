import React from "react";
import { Draggable } from "react-beautiful-dnd";

export const VarBox = ({ index, value }) => {
  return (
    <>
      {/* <div index={index}> */}
      <div className="varBox--button btn">{value}</div>
      {/* </div> */}
    </>
  );
};
