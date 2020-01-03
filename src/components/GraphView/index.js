import React from "react";
import "./style.scss";

export default function index(props) {
  console.log(props);

  return (
    <div className="graphview">
      {!props.title ? (
        <div className="graphview-title">
          <h1>No data point selected</h1>
        </div>
      ) : (
        <>
          <div className="graphview-title">
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
          </div>
          <div className="graphview-buttons">
            <button type="button">Filter</button>
            <button type="button">Sort</button>
            <button type="button">Group by</button>
            <button type="button">Forecast</button>
          </div>
        </>
      )}
    </div>
  );
}
