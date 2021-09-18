import React from "react";

export const Results = () => {
  const variableName = ["A", "B", "C", "D", "E"];
  const getTableBody = (item, index) => {
    return (
      <>
        <tr>
          <td scope="row">{item}</td>
          <td>&lt;</td>
          <td>67</td>
        </tr>
      </>
    );
  };
  return (
    <div className="results--container">
      <div>MATCHED RESULT</div>
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th scope="col">Variable</th>
            <th scope="col">Operator</th>
            <th scope="col">Integer</th>
          </tr>
        </thead>
        <tbody>
          {variableName ? <>{variableName.map(getTableBody)}</> : <></>}
        </tbody>
      </table>
    </div>
  );
};
