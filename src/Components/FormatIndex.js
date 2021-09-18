import React from "react";

export const FormatIndex = () => {
  return (
    <>
      <div className="drop-heading text-center">DROP PANEL</div>
      <hr className="m-0" />
      <div className="d-flex align-items-center justify-content-between">
        <div>Correct format</div>
        <div className="d-flex">
          <div className="index-source"></div>
          <div className="index-operator"></div>
          <div className="index-int"></div>
        </div>
      </div>
    </>
  );
};
