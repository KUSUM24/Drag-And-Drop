import React from "react";

export const Results = ({ results, variable }) => {
  const getTableBody = (item, index) => {
    return (
      <>
        <tr>
          <td scope="row">{variable}</td>
          <td>{item}</td>
        </tr>
      </>
    );
  };
  return (
    <>
      {results.length ? (
        <div className="results--container">
          <div className="result-heading">MATCHED RESULT</div>
          <hr className="result-hr" />
          <table class="table">
            <thead class="thead-light">
              <tr>
                <th scope="col">Variable</th>
                <th scope="col">Integer</th>
              </tr>
            </thead>
            <tbody> {results.map(getTableBody)}</tbody>
          </table>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
