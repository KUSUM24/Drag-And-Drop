import React from "react";

export const Operators = () => {
  return (
    <div className="operator--container">
      <div className="operation--container">
        <div className="operation--button btn">&gt;</div>
        <div className="operation--button btn">&lt;</div>
      </div>
      <hr className="w-75" />
      <div className="integer--button btn btn-success w-50">Integer</div>
    </div>
  );
};
